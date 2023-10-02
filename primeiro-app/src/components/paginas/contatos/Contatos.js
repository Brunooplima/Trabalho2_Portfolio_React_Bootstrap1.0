function Contatos() {
  return (
    <section class="contact" id="contato">
      <div class="contato-forms">
        <div class="borda">
          <h1>Contato</h1>
          <form
            class="formulario"
            action="https://api.staticforms.xyz/submit"
            method="post"
          >
            <label>Nome</label>
            <input
              type="text"
              name="name"
              placeholder="Digite o seu nome"
              autocomplete="off"
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Digite o seu email"
              autocomplete="off"
            />
            <label>Mensagem</label>
            <textarea
              name="email"
              cols="30"
              rows="10"
              placeholder="Digite sua mensagem"
            ></textarea>
            <div class="marg">
              <button type="submit">Enviar</button>
            </div>

            <input
              type="hidden"
              name="accessKey"
              value="4a1ac3b4-9b06-4e76-9c87-c065e25b227e"
            />
            <input
              type="hidden"
              name="redirectTo"
              value="http://127.0.0.1:5500/contact.html"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contatos;