import type { FieldValues, UseFormRegister } from 'react-hook-form'

type InputProps = {
  register: UseFormRegister<FieldValues>
}

function InputContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4">{children}</div>
}

function ContactNameInput({ register }: InputProps) {
  return (
    <InputContainer>
      <label htmlFor="name">이름</label>
      <input
        required
        {...register('name')}
        className="w-full text-black rounded-md bg-gray-200 p-4 md:p-6 focus:outline-none"
        placeholder="이름을 적어주세요"
      />
    </InputContainer>
  )
}

function ContactEmailInput({ register }: InputProps) {
  return (
    <InputContainer>
      <label htmlFor="email">이메일</label>
      <input
        required
        type="email"
        {...register('email')}
        className="w-full text-black rounded-md bg-gray-200 p-4 md:p-6 focus:outline-none"
        placeholder="이메일을 적어주세요"
      />
    </InputContainer>
  )
}

function ContactMessageInput({ register }: InputProps) {
  return (
    <InputContainer>
      <label htmlFor="message">메세지</label>
      <textarea
        required
        {...register('message')}
        cols={30}
        rows={10}
        className="resize-none w-full text-black rounded-md bg-gray-200 p-4 md:p-6 focus:outline-none"
        placeholder="메세지를 작성해주세요"
      />
    </InputContainer>
  )
}

export { ContactNameInput, ContactEmailInput, ContactMessageInput }
