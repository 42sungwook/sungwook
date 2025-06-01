'use client'

import { Button, H2 } from '@/ui'
import { type FieldValues, useForm } from 'react-hook-form'
import {
  ContactEmailInput,
  ContactMessageInput,
  ContactNameInput
} from './ContactFormInput'

function Contact() {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (result.status === 200) {
        alert('메일이 전송되었습니다.')
        reset()
      } else {
        alert(`메일 전송에 실패했습니다.`)
      }
    } catch (error) {
      console.error('error:', error)
      alert('메일 전송 중 오류가 발생했습니다. 나중에 다시 시도해 주세요.')
    }
  }

  return (
    <section
      id="CONTACT"
      className="section bg-background-light dark:bg-background-dark"
    >
      <div className="section-container">
        <H2 className="mb-20 text-center">CONTACT</H2>
        <form
          className="flex flex-col bg-white dark:bg-gray-500 shadow-lg rounded-md gap-8 p-8 md:p-16 max-w-[80rem] w-[95%] mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <ContactNameInput register={register} />
          <ContactEmailInput register={register} />
          <ContactMessageInput register={register} />
          <div className="flex justify-center lg:justify-end">
            <Button type="submit">SUBMIT</Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
