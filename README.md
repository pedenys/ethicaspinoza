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

- [x] Create components for Appendix, Praefatio, Propositio and so on
- [x] Define components' props to uniquely identify them
- [x] Populate components
- [x] Create json for each pars
- [x] Create page for each pars
- [x] Create menu
- [x] Create toggle visibility menu
- [ ] Build pars II weird architecture
- [ ] Refacto pars prop with pars constant
- [ ] Style Appendix, Praefatio, Propositio and so on (margins, font-size, colors, dividers if needed)
- [ ] Find inspiration for overall design
- [ ] Fix menu display (overflow-y is broken as css position is `fixed`)
- [ ] Add Demonstratio to each propositio in every pars
- [ ] Create MDX part for explanations
