import { IUser } from '@/interfaces/IUser'

export default function ClientInfos({ user }: { user: IUser | null }) {
  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Informações</h3>
      <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="firstname" className="text-gray-500 text-sm mb-2">
            Nome
          </label>
          <input type="text" name="firstname" id="firstname" placeholder="Nome" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="lastname" className="text-gray-500 text-sm mb-2">
            Sobrenome
          </label>
          <input type="text" name="lastname" id="lastname" placeholder="Sobrenome" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="document" className="text-gray-500 text-sm mb-2">
            Documento (CPF/CNPJ)
          </label>
          <input type="text" name="document" id="document" placeholder="Documento (CPF/CNPJ)" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="whatsapp" className="text-gray-500 text-sm mb-2">
            Whatsapp
          </label>
          <input type="text" name="whatsapp" id="whatsapp" placeholder="Whatsapp" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="email" className="text-gray-500 text-sm mb-2">
            E-mail
          </label>
          <input type="email" name="email" id="email" placeholder="E-mail" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="birthdate" className="text-gray-500 text-sm mb-2">
            Data de nascimento
          </label>
          <input type="text" name="birthdate" id="birthdate" placeholder="Data de nascimento" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="naturalness" className="text-gray-500 text-sm mb-2">
            Naturalidade
          </label>
          <input type="text" name="naturalness" id="naturalness" placeholder="Naturalidade" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="gender" className="text-gray-500 text-sm mb-2">
            Gênero
          </label>
          <input type="text" name="gender" id="gender" placeholder="Gênero" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="civilStatus" className="text-gray-500 text-sm mb-2">
            Estado Civil
          </label>
          <input type="text" name="civilStatus" id="civilStatus" placeholder="Estado Civil" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="occupation" className="text-gray-500 text-sm mb-2">
            Profissão
          </label>
          <input type="text" name="occupation" id="occupation" placeholder="Profissão" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="rg" className="text-gray-500 text-sm mb-2">
            RG
          </label>
          <input type="text" name="rg" id="rg" placeholder="RG" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="rgIssuer" className="text-gray-500 text-sm mb-2">
            Órgão Emissor
          </label>
          <input type="text" name="rgIssuer" id="rgIssuer" placeholder="Órgão Emissor" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="rgState" className="text-gray-500 text-sm mb-2">
            UF
          </label>
          <input type="text" name="rgState" id="rgState" placeholder="UF" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="rgIssueDate" className="text-gray-500 text-sm mb-2">
            Data Emissão
          </label>
          <input type="text" name="rgIssueDate" id="rgIssueDate" placeholder="Data Emissão" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
      </div>
    </div>
  )
}
