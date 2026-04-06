import { Helmet } from "react-helmet-async"

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Omega Tutorials Gurugram</title>
        <meta name="description" content="Read the terms and conditions of Omega Tutorials, Gurugram including admission policy, fees structure, attendance rules, and student responsibilities." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://omegatutorials.in/terms-and-conditions" />
        <meta property="og:title" content="Terms & Conditions - Omega Tutorials" />
        <meta property="og:description" content="Official terms and conditions for students and parents at Omega Tutorials, Gurugram." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms and Conditions",
            "description": "Terms and conditions of Omega Tutorials in Gurugram.",
            "url": "https://omegatutorials.in/terms-and-conditions"
          }`}
        </script>
      </Helmet>

      <div className='mt-15 px-4 md:px-8 py-12 lg:py-24 max-w-5xl mx-auto flex flex-col gap-6'>
        <div className='flex flex-col items-center gap-2'>
          <h1 className='text-2xl md:text-4xl font-bold'>Terms & Conditions</h1>
          <p className='md:text-lg text-gray-500'>Last Updated: 11 Mar, 2026</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>1. Admission Confirmation</h2>
          <p>Admission will be confirmed only after submission of the duly filled admission form along with full fees (or first instalment, if applicable).</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>2. Fees Policy</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Fees once paid are non-refundable and non-transferable under any circumstances.</li>
            <li>Fee instalment, if allowed, must be paid strictly on or before the due date.</li>
            <li>Delay in fee payment may result late payment charges or suspension of classes.</li>
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>3. Attendance & Discipline</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Regular attendance is compulsory.</li>
            <li>Students must maintain proper discipline, punctuality, and respectful behaviour towards teachers and staff.</li>
            <li>The institute reserves the right to take disciplinary action or cancel admission in case of repeated misconduct.</li>
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>4. Leaves & Absenteeism</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Absence without prior information or frequent unnecessary leaves will adversely affect academic performace.</li>
            <li>Omega Tutorials will not be responsible for syllabus loss due to student absenteeism.</li>
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>5. Academic Responsibility</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>The institute provides guidance, teaching, practise, and evaluation at its best level but does not guarantee ranks or marks.</li>
            <li>Final academic results depend on the student's sincerity, attendance, self-study, and performace.</li>
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>6. Tests & Assessments</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Participation in internal tests, assignments, and doubt-solving sessions is mandatory.</li>
            <li>Parents are expected to regularly review test performace and feedback.</li>
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>7. Parent-Institute Cooperation</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Parents must ensure their ward follows study instructions, homework schedules, and discipline rules.</li>
            <li>Any concern should be discussed directly with the institute during official hours.</li>
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>8. Batch Management</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Batch timings, faculty allocation, and class schedules may be changed if required in the academic interest of students.</li>
            <li>Class may be merged or adjusted depending on student strength.</li>
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>9. Study Material</h2>
          <p>Study material provided is for <strong>personal use only</strong> and must not be shared, copied, or circulated in any form.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>10. Parking of vehicles</h2>
          <p>Parking of vehicles by students is at their own risk. No claim will be entertained regarding any loss/damage of vehicles.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>11. Damage & Loss</h2>
          <p>Any damage to institute property caused by the student will be recoverable from the student/parent.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>12. Communication Policy</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Official communication will be done via WhatsApp, SMS, or notice board.</li>
            <li>Parents are responsible for checking updates regularly.</li>
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>13. Withdrawal from Course</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>If a student leaves the course midway, <strong>fees already paid will not be refunded or adjusted.</strong>.</li>
            <li>No fee reduction will be allowed for missed classes.</li>
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>14. Use of student Photos & Videos</h2>
          <p>The institute reserves the right to use students' photographs, videos and academic achievements taken during classes, tests, or events for <strong>promotional and academic purposes</strong> (website, social media, brochures, etc.), without any financial obligation.</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-semibold'>15. Jurisdiction</h2>
          <p>Any dispute shall be subject to the jurisdiction of local courts only.</p>
        </div>
      </div>
    </>
  )
}

export default TermsAndConditions