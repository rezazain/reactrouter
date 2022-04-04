import React, { Component, Fragment } from "react";
import { Header } from "../Component";
import "./Style/Register.css";

class Register extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="register-container">
          <h2>Daftar</h2>
          <p className="create">Ini cepat dan mudah</p>
          <hr></hr>
          <div className="register-form">
            <form>
              <input type="text" placeholder="Nama Depan" className="Nama" />
              <input type="text" placeholder="Nama Belakang" className="Nama" />
              <input
                type="text"
                placeholder="No Telefon Atau Email"
                className="Email"
              />
              <br></br>
              <input
                type="password"
                placeholder="Kata Sandi Baru"
                className="Sandi"
              />
              <p className="create">Tanggal Lahir</p>
              <select className="Tanggal">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select className="Bulan">
                <option value="Januari">Januari</option>
                <option value="Februari">Februari</option>
                <option value="Maret">Maret</option>
                <option value="April">April</option>
                <option value="Mei">Mei</option>
                <option value="Juni">Juni</option>
                <option value="Juli">Juli</option>
                <option value="Agustus">Agustus</option>
                <option value="September">September</option>
                <option value="Oktober">Oktober</option>
                <option value="November">November</option>
                <option value="Desember">Desember</option>
              </select>
              <select className="Tahun">
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
              </select>
              <p className="create">Jenis Kelamin</p>
              <input type="radio" id="pria" name="jeniskelamin" />
              <label for="pria" className="pria">
                Pria
              </label>
              <input
                type="radio"
                id="wanita"
                name="jeniskelamin"
                className="wanita"
              />
              <label for="wanita">wanita</label>
            </form>
            <div>
              <button className="register-button">Daftar</button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Register;
