
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AnaSayfa from "./AnaSayfa"
import Musteri from "./Musteri"
import YeniMusteri from "./YeniMusteri"
import Urun from "./Urun"
import YeniUrun from "./YeniUrun"
import Siparis from "./Siparis"
import YeniSiparis from "./YeniSiparis"
import Tahsilat from "./Tahsilat"
import YeniTahsilat from "./YeniTahsilat.js"
import Odeme from "./Odeme"
import YeniOdeme from "./YeniOdeme"
import Sehir from "./Sehir"
import YeniSehir from "./YeniSehir"
import SiparisDurumu from "./SiparisDurumu"
import YeniSiparisDurumu from "./YeniSiparisDurumu"
import TahsilatTipi from "./TahsilatTipi"
import YeniTahsilatTipi from "./YeniTahsilatTipi"
import UrunKategorisi from "./UrunKategorisi"
import YeniUrunKategorisi from "./YeniUrunKategorisi"

import Login from "./Login";
import Logout from "./Logout";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AnaSayfa />} />
          <Route path="/Musteri" element={<Musteri />} />
          <Route path="/YeniMusteri" element={<YeniMusteri />} />
          <Route path="/Urun" element={<Urun />} />
          <Route path="/YeniUrun" element={<YeniUrun />} />
          <Route path="/Siparis" element={<Siparis />} />
          <Route path="/YeniSiparis" element={<YeniSiparis />} />
          <Route path="/Tahsilat" element={<Tahsilat />} />
          <Route path="/YeniTahsilat" element={<YeniTahsilat />} />
          <Route path="/Odeme" element={<Odeme />} />
          <Route path="/YeniOdeme" element={<YeniOdeme />} />
          <Route path="/Sehir" element={<Sehir />} />
          <Route path="/YeniSehir" element={<YeniSehir />} />
          <Route path="/SiparisDurumu" element={<SiparisDurumu/>} />
          <Route path="/YeniSiparisDurumu" element={<YeniSiparisDurumu/>} />
          <Route path="/TahsilatTipi" element={<TahsilatTipi/>} />
          <Route path="/YeniTahsilatTipi" element={<YeniTahsilatTipi/>} />
          <Route path="/UrunKategorisi" element={<UrunKategorisi/>} />
          <Route path="/YeniUrunKategorisi" element={<YeniUrunKategorisi/>} />

          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;