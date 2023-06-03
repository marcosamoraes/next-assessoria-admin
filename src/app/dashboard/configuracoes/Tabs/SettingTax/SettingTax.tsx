export default function SettingTax() {

  return (
    <div className="bg-white px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
      <div className="flex flex-col w-full md:w-3/12 md:px-2 md:-mx-2">
        <label htmlFor="name" className="text-gray-500 text-sm mb-2">
                  Nome
        </label>
        <input type="text" name="name" id="name" placeholder="Nome" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
      </div>
      <div className="flex flex-col w-full md:w-3/12 md:px-2 md:-mx-2">
        <label htmlFor="code" className="text-gray-500 text-sm mb-2">
                  Código
        </label>
        <input type="text" name="code" id="code" placeholder="Código" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
      </div>
      <div className="flex flex-col w-full md:w-3/12 md:px-2 md:-mx-2">
        <label htmlFor="type" className="text-gray-500 text-sm mb-2">
                  Tipo
        </label>
        <select name="type" id="type" className="border border-gray-300 rounded-lg px-3 py-2 mb-5">
          <option value="percentage">Porcentagem</option>
          <option value="amount">Valor</option>
        </select>
      </div>
      <div className="flex flex-col w-full md:w-3/12 md:px-2 md:-mx-2">
        <label htmlFor="category" className="text-gray-500 text-sm mb-2">
                  Categoria
        </label>
        <select name="category" id="category" className="border border-gray-300 rounded-lg px-3 py-2 mb-5">
          <option value="1">Categoria 1</option>
          <option value="2">Categoria 2</option>
          <option value="3">Categoria 3</option>
        </select>
      </div>
      <div className="flex flex-col w-full md:w-3/12 md:px-2 md:-mx-2">
        <label htmlFor="value" className="text-gray-500 text-sm mb-2">
                  Valor
        </label>
        <input type="text" name="value" id="value" placeholder="Valor" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
      </div>
      <div className="flex flex-col w-full md:w-3/12 md:px-2 md:-mx-2">
        <label htmlFor="minValue" className="text-gray-500 text-sm mb-2">
                  Valor Mínimo
        </label>
        <input type="text" name="minValue" id="minValue" placeholder="Valor Mínimo" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
      </div>
      <div className="flex flex-col w-full md:w-3/12 md:px-2 md:-mx-2">
        <label htmlFor="quantity" className="text-gray-500 text-sm mb-2">
                  Quantidade
        </label>
        <input type="text" name="quantity" id="quantity" placeholder="Quantidade" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
      </div>
      <div className="flex flex-col w-full md:w-3/12 md:px-2 md:-mx-2">
        <label htmlFor="expire_at" className="text-gray-500 text-sm mb-2">
                  Expira em
        </label>
        <input type="text" name="expire_at" id="expire_at" placeholder="Expira em" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
      </div>
    </div>
  )
}
