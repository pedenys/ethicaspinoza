# EthicaSpinoza

[Spinoza's Ethics](https://ethicaspinoza.netlify.com/) for the current century.

### Principle

The idea is to let users check what they want or do not want to **read** in Spinoza's masterpiece. Beginners may want to only read scholies while more advanced readers don't want to have demonstrations in the way of their first intensive reading.

Also, generated HTML tagging might also be useful.

### Naming conventions

**Latin words are used for interoperability**.

Ethics is made of pars. Multiple components can be identified in every parts which are :

- Appendix
- Axioma
- Caput
- Corollarium
- Demonstratio
- Lemma
- Postulatum
- Praefatio
- Propositio
- Scholium
- Several other singular pieces like Affectuum Definitiones at the end of pars III or Caput in pars IV's Appendix

The ping-pong game between propositio and demonstratio through out the Ethics really enforces the idea that every atom of the text can and should be uniquely identfied. This identifcation can be made relatively to its place in the pars or to a propositio.

Appendix and Praefatio are singletons, relative to a specific pars.
Axioma is multiple, relative to a specific pars.
Lemma is multiple, relative to a specific pars and can have one or many Demonstratio.
Propositio is multiple, relative to a specific pars and can have one or many Demonstratio, one or many Scholium, one or many Corollarium.
Demonstratio, Scholium and Corollarium have an index, they are first demonstratio, second demonstratio and so on. In the latin text, every demonstrio after the first is simply noted Aliter.
Caput is relative is relative to an Appendix so it is relative to a single pars.

### Folders

The text is built with React components using Nextjs framework for easy-win SSR.

### Todo

Part IV

- [ ] Create and style components for Appendix, Praefatio, Propositio
- [ ] Define components' props to uniquely identify them
- [ ] Populate components
- [ ] Add Demonstratio
