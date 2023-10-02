import { IUser } from '@/interfaces/IUser'

type ClientInfosProps = {
  user: IUser
  onChange: (e: any) => void
}
export default function ClientInfos({ user, onChange }: ClientInfosProps) {
  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Informações</h3>
      <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="name" className="text-gray-500 text-sm mb-2">
            Nome
          </label>
          <input type="text" name="name" id="name" placeholder="Nome" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.name ?? ''} onChange={onChange} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="last_name" className="text-gray-500 text-sm mb-2">
            Sobrenome
          </label>
          <input type="text" name="last_name" id="last_name" placeholder="Sobrenome" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.last_name ?? ''} onChange={onChange} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="details.document" className="text-gray-500 text-sm mb-2">
            Documento (CPF/CNPJ)
          </label>
          <input type="text" name="details.document" id="details.document" placeholder="Documento (CPF/CNPJ)" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.details?.document ?? ''} onChange={onChange} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="whatsapp" className="text-gray-500 text-sm mb-2">
            Whatsapp
          </label>
          <input type="text" name="whatsapp" id="whatsapp" placeholder="Whatsapp" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.whatsapp ?? ''} onChange={onChange} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="email" className="text-gray-500 text-sm mb-2">
            E-mail
          </label>
          <input type="email" name="email" id="email" placeholder="E-mail" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.email ?? ''} onChange={onChange} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="birth_date" className="text-gray-500 text-sm mb-2">
            Data de nascimento
          </label>
          <input type="text" name="birth_date" id="birth_date" placeholder="Data de nascimento" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.details?.birth_date ?? ''} onChange={onChange} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="naturalness" className="text-gray-500 text-sm mb-2">
            Naturalidade
          </label>
          <input type="text" name="naturalness" id="naturalness" placeholder="Naturalidade" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.details?.naturalness ?? ''} onChange={onChange} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="gender" className="text-gray-500 text-sm mb-2">
            Gênero
          </label>
          <input type="text" name="gender" id="gender" placeholder="Gênero" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.details?.gender ?? ''} onChange={onChange} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="civil_status" className="text-gray-500 text-sm mb-2">
            Estado Civil
          </label>
          <input type="text" name="civil_status" id="civil_status" placeholder="Estado Civil" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.details?.civil_status ?? ''} onChange={onChange} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="occupation" className="text-gray-500 text-sm mb-2">
            Profissão
          </label>
          <input type="text" name="occupation" id="occupation" placeholder="Profissão" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.details?.occupation ?? ''} onChange={onChange} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="rg" className="text-gray-500 text-sm mb-2">
            RG
          </label>
          <input type="text" name="rg" id="rg" placeholder="RG" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.details?.rg ?? ''} onChange={onChange} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="rg_issuer" className="text-gray-500 text-sm mb-2">
            Órgão Emissor
          </label>
          <input type="text" name="rg_issuer" id="rg_issuer" placeholder="Órgão Emissor" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.details?.rg_issuer ?? ''} onChange={onChange} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="rg_state" className="text-gray-500 text-sm mb-2">
            UF
          </label>
          <input type="text" name="rg_state" id="rg_state" placeholder="UF" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.details?.rg_state ?? ''} onChange={onChange} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="rg_issue_date" className="text-gray-500 text-sm mb-2">
            Data Emissão
          </label>
          <input type="text" name="rg_issue_date" id="rg_issue_date" placeholder="Data Emissão" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.details?.rg_issue_date ?? ''} onChange={onChange} />
        </div>
      </div>
    </div>
  )
}
