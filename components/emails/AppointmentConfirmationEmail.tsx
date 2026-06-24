import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface AppointmentConfirmationEmailProps {
  doctorName: string;
  appointmentDate: string;
  appointmentTime: string;
  appointmentType: string;
  duration: string;
  price: string;
}

function AppointmentConfirmationEmail({
  doctorName,
  appointmentDate,
  appointmentTime,
  appointmentType,
  duration,
  price,
}: AppointmentConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your dental appointment has been confirmed</Preview>

      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto max-w-140 px-4 py-5 pb-12">
            {/* Logo */}
            <Section className="mb-8 text-center">
              <div className="inline-flex items-center">
                <Img
                  src="https://i.ibb.co.com/tRy6cC2/logo.png"
                  width="50"
                  height="50"
                  alt="DentWise"
                  className="inline rounded-lg align-middle"
                />
                <Text className="m-0 ml-3 inline text-[20px] font-bold text-blue-600">
                  DentWise
                </Text>
              </div>
            </Section>

            {/* Heading */}
            <Heading className="my-7.5 text-center text-[24px] font-bold text-gray-800">
              Appointment Confirmed! 🦷
            </Heading>

            {/* Intro */}
            <Text className="my-4 text-[16px] leading-6.5 text-gray-700">
              Hi there,
            </Text>

            <Text className="my-4 text-[16px] leading-6.5 text-gray-700">
              Your dental appointment has been successfully booked. Here are the
              details:
            </Text>

            {/* Appointment Details */}
            <Section className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <Text className="my-2 mb-1 text-[14px] font-medium text-gray-500">
                Doctor
              </Text>
              <Text className="mb-4 mt-0 text-[16px] font-semibold text-gray-800">
                {doctorName}
              </Text>

              <Text className="my-2 mb-1 text-[14px] font-medium text-gray-500">
                Appointment Type
              </Text>
              <Text className="mb-4 mt-0 text-[16px] font-semibold text-gray-800">
                {appointmentType}
              </Text>

              <Text className="my-2 mb-1 text-[14px] font-medium text-gray-500">
                Date
              </Text>
              <Text className="mb-4 mt-0 text-[16px] font-semibold text-gray-800">
                {appointmentDate}
              </Text>

              <Text className="my-2 mb-1 text-[14px] font-medium text-gray-500">
                Time
              </Text>
              <Text className="mb-4 mt-0 text-[16px] font-semibold text-gray-800">
                {appointmentTime}
              </Text>

              <Text className="my-2 mb-1 text-[14px] font-medium text-gray-500">
                Duration
              </Text>
              <Text className="mb-4 mt-0 text-[16px] font-semibold text-gray-800">
                {duration}
              </Text>

              <Text className="my-2 mb-1 text-[14px] font-medium text-gray-500">
                Cost
              </Text>
              <Text className="mb-4 mt-0 text-[16px] font-semibold text-gray-800">
                {price}
              </Text>

              <Text className="my-2 mb-1 text-[14px] font-medium text-gray-500">
                Location
              </Text>
              <Text className="mb-0 mt-0 text-[16px] font-semibold text-gray-800">
                Dental Center
              </Text>
            </Section>

            {/* Note */}
            <Text className="my-4 text-[16px] leading-6.5 text-gray-700">
              Please arrive 15 minutes early for your appointment. If you need
              to reschedule or cancel, please contact us at least 24 hours in
              advance.
            </Text>

            {/* Button */}
            <Section className="my-8 text-center">
              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/appointments`}
                className="inline-block rounded-md bg-blue-600 px-6 py-3 text-center text-[16px] font-semibold text-white no-underline"
              >
                View My Appointments
              </Link>
            </Section>

            {/* Footer */}
            <Text className="mt-8 mb-4 text-[16px] leading-6.5 text-gray-700">
              Best regards,
              <br />
              The DentWise Team
            </Text>

            <Text className="mt-4 mb-0 text-center text-[14px] leading-6 text-gray-500">
              If you have any questions, please contact us at
              support@dentwise.com
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default AppointmentConfirmationEmail;