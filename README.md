# EthicaSpinoza


Spinoza's Ethics for the current century made with plain HTML, CSS and JS.

⭐&nbsp;**Anybody** with basic HTML skills can tag text & make a PR !&nbsp;⭐

## Project

### Principle

The idea is to let users check what they want or do not want to **read** in Spinoza's masterpiece. Beginners may want to only read scholies while more advanced readers don't want to have demonstrations in the way of their first intensive reading.

Also, researchers may find useful HTML tagging to data-analyse the text.


### Naming conventions

**Latin words are used for interoperability**.

In order to give to every element its place, HTML tagging is done via classes and ids. Classes just follow the generic identity of the item (scholie, proposition, definition, demonstration,, etc.). Ids are more complex because they are relative to the place of the item in Ethics's architecture. 

For a demonstration, which is always relative to a 'parent' item, himself relative to a part of Ethics, we'll use :

```html
<div class="demonstratio" id="partII-proposition-38-demonstration-1">{children}</div>
```

**Note**: sometimes Spinoza uses new generic identities for its item like the axiomas about bodies or relations between bodies in part II. The best way to handle may be to add this identity into the id like this :

```html
<div class="lemma" id="partII-axioma-inter-corpus-1-lemma-1">{children}</div>
```

## Folders

Website files are under `./www`.
Source files (`.txt`) are under `./source` with a specific folder for supported languages.
Design files (for icons for instance) and other relatively small other aspects of the project currently in stand-by (ebook) are under `./other`.

### Todo

**Tagging**

- [ ] part II
- [ ] part III
- [ ] part IV
- [ ] part V

**Linkings between propositions, demonstrations, etc.**

- [ ] part II
- [ ] part III
- [ ] part IV
- [ ] part V

### Roadmap

- [ ] Mobile App (React Native)
- [ ] Epub version
