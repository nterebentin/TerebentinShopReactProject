
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
import Tahsilat from "./Tahsilat"
import Odeme from "./Odeme"
import YeniOdeme from "./YeniOdeme"
import Sehir from "./Sehir"
import SiparisDurumu from "./SiparisDurumu"
import TahsilatTipi from "./TahsilatTipi"
import UrunKategorisi from "./UrunKategorisi"

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
          <Route path="/Tahsilat" element={<Tahsilat />} />
          <Route path="/Odeme" element={<Odeme />} />
          <Route path="/YeniOdeme" element={<YeniOdeme />} />
          <Route path="/Sehir" element={<Sehir />} />
          <Route path="/SiparisDurumu" element={<SiparisDurumu/>} />
          <Route path="/TahsilatTipi" element={<TahsilatTipi/>} />
          <Route path="/UrunKategorisi" element={<UrunKategorisi/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;