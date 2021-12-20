# Dentes Mundus

**Tim: Tin Kanjovsky <br />**

[Fakultet informatike u Puli](https://fipu.unipu.hr/) <br />
Kolegij: [Programsko Inženjerstvo](https://www.notion.so/fiputreca/Programsko-in-enjerstvo-e353945331df468e8382cdad1e91c4b8) <br />
Mentori: [doc.dr.sc. Nikola Tanković](https://www.notion.so/Kontakt-stranica-875574d1b92248b1a8e90dae52cd29a9) <br />

## Opis

Aplikacija za lakšu rezervaciju termina kod stomatologa i odabira mogućih usluga. Time bi se olakšalo zakazivanje termina, a smanjio bi se i stres za pacijenta.
U aplikaciji se prije prijave može odabrati dali ste doktor ili se prijavljujete kao pacijent. Ako se prijavljujete kao pacijent u mogćnosti ste ostaviti komenatar i ocjenu željenom doktoru., te rezervirati termin. Ako se prijavljujete kao doktor u mogućnosti ste vidjeti rezervacije pacijenta.

## Funkcionalnosti

- Prijava/registracija i odjava
  -Prijava/registracija doktora
  -Prijava/registracija pacijenta
- Dodavanje i brisanje doktora
  - Mogućnost pregleda svakog doktora
    - Mogućnost pregleda termina i usluga svakog doktora
- Mogućnost da doktor pregleda trenutne rezervacije
- Pretraga Doktora
  - Unos imena Doktora
- Ostavljanje komentara za pojedinog doktora
  - ocjena usluge
- Odabir željenog termina i usluga
- Top 3 najbolje ocjenjena doktora trenutno

[Link na prototip aplikacije](nemam još)<br />
[Link na aplikaciju](nemam još)

## Test user

Pacijent <br />
Email: pacijent@test.com <br />
Password: 123456
<br />
Doktor<br />
Email : doktor@test.com <br />
Password:654321

## Dodaci

### Firebase functions

npm install -g firebase-tools <br />
firebase login <br />
firebase init functions <br />

#### Deploy:

firebase deploy --only functions <br />
