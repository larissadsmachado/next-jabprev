"use client";
import React from "react";
import { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: "",
    matricula: "",
    telefone: "",
    email: "",
    orgao: "",
    dataEmissao: "",
    dataExoneracao: "",
    arquivos: {
      rg: null,
      cpf: null,
      pisPasep: null,
      comprovante: null,
    },
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        arquivos: { ...formData.arquivos, [name]: files[0] },
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-10 border-2 border-yellow-400 rounded-lg shadow-xl my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold">Nome Completo *</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-semibold">Matrícula *</label>
          <input type="number" name="matricula" value={formData.matricula} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block font-semibold">Telefone *</label>
          <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-semibold">E-mail</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
      </div>
      <div className="mt-4">
        <label className="block font-semibold">Órgão de Aproveitamento *</label>
        <textarea name="orgao" value={formData.orgao} onChange={handleChange} required className="w-full p-2 border rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block font-semibold">Data de Emissão *</label>
          <input type="date" name="dataEmissao" value={formData.dataEmissao} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block font-semibold">Data de Exoneração *</label>
          <input type="date" name="dataExoneracao" value={formData.dataExoneracao} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {Object.keys(formData.arquivos).map((key) => (
          <div key={key}>
            <label className="block font-semibold">{key.toUpperCase()} *</label>
            <input type="file" name={key} onChange={handleFileChange} required className="w-full p-2 border rounded" />
          </div>
        ))}
      </div>
      <button type="submit" className="mt-10 w-full bg-blue-900 text-white font-semibold p-2 rounded-xl hover:bg-blue-950">Enviar Formulário</button>
    </form>
  );
};

export default Formulario;
