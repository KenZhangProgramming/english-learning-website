
import { Role, BookingStatus, PaymentStatus } from '@prisma/client'
import { prisma } from '../lib/db'


async function main() {
    console.log('Start seeding ...')

    // 1. Create Admin
    await prisma.user.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            email: 'admin@example.com',
            name: 'Super Admin',
            role: Role.ADMIN,
            admin: {
                create: {
                    name: 'Super Admin',
                    email: 'admin@example.com',
                    permissions: ['view_all', 'edit_users', 'edit_bookings']
                }
            }
        },
    })
    console.log(`Created admin`)

    // 2. Create Teacher 1 (John Doe)
    const teacherUser = await prisma.user.upsert({
        where: { email: 'teacher1@example.com' },
        update: {},
        create: {
            email: 'teacher1@example.com',
            name: 'John Doe',
            role: Role.TEACHER,
            teacher: {
                create: {
                    name: 'John Doe',
                    email: 'teacher1@example.com',
                    gender: 'Male',
                    city: 'New York',
                    country: 'USA',
                    totalEarnings: 0,
                    classesBooked: 0,
                    specializations: {
                        create: [
                            { specialization: 'English Speaking' },
                            { specialization: 'Business English' }
                        ]
                    },
                    availableSlots: {
                        create: [
                            {
                                startTime: new Date(new Date().setHours(10, 0, 0, 0)),
                                endTime: new Date(new Date().setHours(11, 0, 0, 0)),
                                hourlyRate: 50,
                                isBooked: false
                            }
                        ]
                    }
                }
            }
        },
    })
    console.log(`Created teacher: ${teacherUser.email}`)

    // 3. Create Student 1 (Jane Smith)
    const studentUser = await prisma.user.upsert({
        where: { email: 'student1@example.com' },
        update: {},
        create: {
            email: 'student1@example.com',
            name: 'Jane Smith',
            role: Role.STUDENT,
            student: {
                create: {
                    name: 'Jane Smith',
                    email: 'student1@example.com',
                    city: 'London',
                    country: 'UK',
                    englishFocus: {
                        create: [
                            { focusArea: 'English Speaking' }
                        ]
                    }
                }
            }
        },
    })
    console.log(`Created student: ${studentUser.email}`)

    // 4. Create Booking
    // We need to fetch the Teacher Profile to add a slot and booking
    const teacherProfile = await prisma.teacher.findUnique({
        where: { userId: teacherUser.id }
    })

    if (!teacherProfile) throw new Error("Teacher profile not found")

    // Create a new future slot for the booking
    const slot = await prisma.availableSlot.create({
        data: {
            teacherId: teacherProfile.id,
            startTime: new Date(Date.now() + 86400000), // +1 day
            endTime: new Date(Date.now() + 86400000 + 3600000), // +1 hour
            hourlyRate: 60,
            isBooked: true
        }
    })

    // Create the booking linked to Student, Teacher, and Slot
    await prisma.booking.create({
        data: {
            student: { connect: { userId: studentUser.id } },
            teacher: { connect: { id: teacherProfile.id } },
            slot: { connect: { id: slot.id } },
            status: BookingStatus.CONFIRMED,
            tuitionAmount: 60
        }
    })
    console.log("Created confirmed booking")

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
