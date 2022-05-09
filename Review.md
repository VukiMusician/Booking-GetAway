Cons:

- Te sugjeroj te perdorish jsx ne files jo js

- Nuk te kritikoj se ke perdorur css pasi per njer beginner css eshte hapi i par, mirpo do kisha dasht cdo style te jet ne folder me komponentin e vet,
  shembull:
  components > Banner > index.jsx, styles.css
  components > Footer > index.jsx, styles.css
  ...
  Ne folderin styles qe e ke krijuar tash, te jen vetem global styles, styles qe i perdor ne me shum se 1 komponent

- Nese ne 2 ose me shum pages do perdorish te njejtin layout, dmth header lart, footer posht, krijo nji container qe do i ket header edhe footer ne render, dhe ne mesin e tyre {children}

- Ne HotelResultsBanner.js ke:
  const search = useLocation().search;
  mundesh:
  const { search } = useLocation() -- kjo quhet destructuring

- Ne vend te console.log(err) ne api calls, perdor alert(error.message), beso dot vjen me mir ai raport edhe per te avancu me 'toaster' (https://www.npmjs.com/package/react-toastify)

- Hotel service krejt ne rregull, mirpo sshof ta kesh perdor diku ------------- Ne qofte se dush ta perdorish:

  - jepi apiClientin 'export' para const
  - importoje ne SearchResults
  - edhe ne vend te axios.get("http://localhost:3000"), ndroje me apiClient.get("/hotels")

- Ne console:
  Warning: Each child in a list should have a unique "key" prop.
  VUKIIIIIIII te lutem mos te ta shoff ma kettttttt hahaahahh --- tallem mu mndodhen dita dites hala
  Ket errorin ta cet se ne db.json vetem njonit objekt i ke vendu 'id' property tjerave jo, ene ajo e shef se vetem objekti i par ka id tjerat skan en ta bon: O vukiiii kan dush trejshhh ooo vukiiii

Pros:

- Struktura eshte mjaft e organizume
- Komponentet jan te ndara neper me shum files, qe esht shum mir pasi kodi esht me i paster
- Gjithcka (librari, kod, styles) eshte i perdorur, nuk ka junk code (pervec servisit).
- Me pelqen shum qe ke perdor mock database dhe jo vetem nji mock file me te dhenat.
- Si fillim beso mke habit, pritsha tet xhaj shum ma shum sende per permirsim.

Reviewer:

- Aldioni
