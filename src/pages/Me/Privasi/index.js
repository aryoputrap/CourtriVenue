/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Header, Gap} from '../../../components';
import {Default, Styles} from '../../styles';

const Privasi = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <View style={Default.padding10}>
        <Header title={'Privasi'} onPress={() => navigation.goBack()} />
      </View>
      <ScrollView style={{marginBottom: 50}}>
        <Text style={Styles.textLong}>
          Courtri menyediakan halaman Kebijakan Privasi sebagai bentuk komitmen
          nyata untuk melindungi dan menjamin informasi pribadi pengguna
          aplikasi. Kebijakan Privasi berisi tentang dasar pengumpulan,
          penyimpanan, pengolahan, pengiriman, pemanfaatan, perubahan dan
          penghapusan informasi terkait pengguna Courtri.
        </Text>
        <Gap height={15} />
        <Text style={Styles.textLong}>
          Dengan klik Daftar atau pernyataan sejenis di aplikasi Courtri,
          pengguna menyatakan bahwa data pribadi merupakan data yang valid dan
          sah, pengguna telah memahami dan menyetujui Kebijakan Privasi, serta
          memberikan persetujuan kepada Courtri untuk mengumpulkan, menyimpan,
          mengolah, mengirimkan, memanfaatkan, mengubah dan menghapus
          data/informasi pengguna sebagaimana tercantum dalam poin-poin
          Kebijakan Privasi.
        </Text>
        <Gap height={15} />
        <Text style={{marginLeft: 20}}>
          1. Pengumpulan Data Pribadi Pengguna
        </Text>
        <Text style={Styles.textLong}>
          Courtri mengumpulkan data pribadi pengguna untuk kemudahan proses
          transaksi pengguna, pemberian referensi bagi pengguna dan tujuan
          lainnya terkait kemudahan dan manfaat bagi pengguna. Data pribadi
          pengguna yang dikumpulkan Courtri adalah sebagai berikut:
        </Text>
        <View style={{marginLeft: 20}}>
          <Text style={[Styles.textLong, {marginTop: 5}]}>
            a. Informasi diri pengguna seperti nama pengguna, nomor telepon,
            email, email, foto, nomor rekening dan informasi lainnya terkait
            identitas pengguna.
          </Text>
          <Text style={[Styles.textLong, {marginTop: 5}]}>
            b. Informasi terkait venue seperti nama venue, alamat, foto, jam
            operasional, fasilitas, harga dan informasi lainnya terkait
            identitas venue.
          </Text>
          <Text style={[Styles.textLong, {marginTop: 5}]}>
            c. Interaksi dengan Customer Service Courtri baik melalui telepon,
            message maupun email.
          </Text>
          <Text style={[Styles.textLong, {marginTop: 5}]}>
            d. Informasi transaksi pada Courtri berupa tanggal, jenis, jumlah
            dan frekuensi transaksi serta detail transaksi lainnya.
          </Text>
          <Text style={[Styles.textLong, {marginTop: 5}]}>
            e. Informasi rating terhadap venue maupun review sejenis.
          </Text>
          <Text style={[Styles.textLong, {marginTop: 5}]}>
            f. Informasi pembayaran yang dilakukan oleh pengguna melalui channel
            pembayaran yang tersedia di aplikasi Courtri.
          </Text>
          <Text style={[Styles.textLong, {marginTop: 5}]}>
            g. Informasi lokasi pengguna maupun venue.
          </Text>
          <Text style={[Styles.textLong, {marginTop: 5}]}>
            h. Informasi perkiraan internet pengguna seperti alamat IP, jenis
            provider dan lainnya.
          </Text>
          <Text style={[Styles.textLong, {marginTop: 5}]}>
            i. Informasi aktivitas pengguna seperti login, pencarian venue
            maupun transaksi.
          </Text>
          <Text style={[Styles.textLong, {marginTop: 5}]}>
            j. Informasi perangkat yang digunakan oleh pengguna dan venue
            seperti brand device, versi OS, IMEI, pilihan bahasa, dan informasi
            lainnya terkait identitas perangkat.
          </Text>
          <Text style={[Styles.textLong, {marginTop: 5}]} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Privasi;
