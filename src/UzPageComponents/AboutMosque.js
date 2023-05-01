import React from 'react';
import '../styles/AboutMosque.css'
import mosqueImage1 from '../images/mosque1.jpg'
import mosqueImage2 from '../images/mosque2.jpg'
import mosqueImage3 from '../images/mosque3.jpg'
import mosqueImage4 from '../images/mosque4.jpg'

const mosqueData = [
    {
        id: 1,
        title: "",
        description: "O'rta asr me'moriy yodgorligi minglab iymonlilarning ziyorat qilgan joyi. Mana, O'zbekiston poytaxtining 'Zangi ota' maqbarasi atrofida tashkil etilgan eng qadimiy yodgorlik majmualaridan biri. Zangi ota, 'qora ota' deb tarjima qilingan. Zangi otaning haqiqiy ismi Oyxoja ibn Tajxoja avliyo Arslonbobo avlodlariga borib taqaladi. Zangi otaning otasi ota Tojxoja, bobosi Abdumalik ota va uning ruhiy tarbiyachilari pir Murshidiy Mansur ota orqali Xo'ja Ahmad Yassaviyga qaytib kelishadi. Oyxojaning onasi Gavhar deb nomlangan. Zangi ota tug'ilgan yili manbalarida aniq ko'rsatilmagan. Biroq, u haqida yozilgan ma'lumotlarga asoslanib, u XII asr oxiri yoki XIII asr boshlarida tug'ilgan va 1168-1258 yillarda yashagan deb taxmin qilish uchun asos bor.Zangi ota Toshkent shahrining Samarqand Darvoza mahallasida tug'ilib o'sgan. Mintaqa aholisi orasida u Arabcha kelib chiqishi va qora terisi tufayli Zangi (Zangi bobo himmati) nomi bilan mashhur edi. Uch yoshidan boshlab u otasidan ta'lim olishni boshladi. Otasi vafotidan keyin u sodiq so'fiylar xalifasi Ahmad Yassaviyning shogirdi bo'lgan va u yerda o'qigan Hakim ota Sulaymon Bakirganiyning oldiga bordi. U bir necha yil uning qaramog'ida bo'lib, undan Yassaviy ta'limotining sirlari va odob-axloqini bilib oldi va ushbu tarikatning yetuk vakili bo'ldi.",
        img: mosqueImage1
    },
    {
        id: 2,
        title: "",
        description: "Keyin u o'z vatani Chosh o'lkasiga (hozirgi Toshkent) qaytib keldi va murabbiylik orqali aholini diniy-axloqiy-mistik ta'limotga o'rgata boshladi. Muhammad payg'ambarning ta'limotlarini tarqatgan Va'zgo'ylarni tayyorladi. Zangha ota-ning butun hayoti Movarounnahr xalqlari uchun qiyin va dahshatli davrga to'g'ri keldi. Mo'g'ul bosqinchilari mamlakatni vayron qilgan va xalq ommasini qul qilgan davrda u va uning izdoshlari vatanparvarlik, mehnatsevarlik, adolat, poklik, Mehribonlik, rahm-shafqat, taqvodorlik kabi umumbashariy ideallarni targ'ib qilib, bosqinchilarning qullaridan xalqni har tomonlama qo'llab-quvvatladilar.Muridlar va Zanghi ota shogirdlari, ayniqsa uzun Hasan ota, Sayyid ota, Sadr ota, Badr ota, dashtikipchoq o'zbeklari, Volga va Uralning tatarlari va boshqirdlari orasida Islomning tarqalishiga hissa qo'shdilar. Zangiota mahalliy aholining suruvlariga g'amxo'rlik qilib, Zohid cho'ponning oddiy hayotini o'tkazdi va bu uning kam hayotidan foyda ko'rdi. Namoz va zikr uning hayotining mazmuniga aylandi.",
        img: mosqueImage2
    },
    {
        id: 3,
        title: "",
        description: "14-asr oxirida mashhur qo'mondon Amir Temurning buyrug'i bilan marhum Solihning qabri atrofida maqbara qurildi. Bu madaniy yodgorlik majmuasining birinchi binosi bo'ldi. 20-asrning boshlariga qadar davom etgan qurilish.Me'moriy ansamblning janubi - g'arbiy qismida Namozdoh masjidi joylashgan. U 19 - asrning ikkinchi yarmida mahalliy kadius sudyasi tomonidan qurilgan va hali ham yuzlab imonlilarni qabul qiladi. XV asrning boshlarida Mirzo Ulug'bek boshchiligida maqbara, makbara kirish qismida sopol bezaklar va Arab trikotajlari bilan bezatilgan Portal qurildi. 18-19-asrlarda majmua hududida madrasa, musulmon diniy maktabi qurilgan bo'lib, u ichki hovliga qaragan kuygan g'ishtdan yasalgan bino-talabalar yashagan va o'qigan hujayralar. Komleksning Markaziy sharafi, Zanghi ota ko'p toshli maqbarasi. Uning ichida Amir Temur davridan beri nafis san'at o'ymakorligi bilan qoplangan tosh qabr toshi saqlanib qolgan. Janubiy kirish joyi yaqinida zangining rafiqasi ota, Anbar Bibi va uning qaynonasi Ulug'poshshoning qadimiy qabristoni va maqbarasi joylashgan.",
        img: mosqueImage3
    },
    {
        id: 4,
        title: "",
        description: "Manbalarga ko'ra, eri birinchi turmushidan vafot etganidan so'ng, Anbar Bibi Zangiy ota bilan turmush qurgan va Toshkentga olib kelingan. Ba'zi ma'lumotlarga ko'ra, Zangie ota 25 yoshida, Anbar Bibi 40 yoshida turmushga chiqqan. Ba'zi ma'lumotlarga ko'ra, Zangie ota Anbar Bibi bilan turmush qurganida 31 yoshda bo'lgan va u 41 yoshda va avvalgi turmushidan uch farzand ko'rgan. Anbar Bibi XII asr oxirida qadimgi davlatni boshqargan Xorazm hukmdorlarining bir bo'lagi Bogoroxanning qizi edi. Shohning qizi bo'lishiga qaramay, Anbar Bibi kambag'al va oddiy oiladan bo'lgan Zangie ota bilan turmush qurgan.Anbar u-doya sifatida tirikchilik qildi-mahalliy ayollardan tug'ish. U o'zining pokligi va Xudodan qo'rqadigan odob-axloqi bilan o'sha davr ayollari uchun namuna bo'lgan. Anbar u va Zangie ota, ehtimol, bir yil farq bilan vafot etgan. 13-asrning oxiriga kelib. Zangie ota dafn qilindi Anbar Bibi va uning qaynonasi birinchi turmushidan boshlab o'z hovlisida. Tarixiy-diniy majmua 'Zangi ota' musulmonlar orasida ham, dunyoning turli burchaklaridan kelgan sayyohlar orasida ham hurmatga sazovor. 2014-2015 yillarda majmuada restavratsiya ishlari olib borildi va tashrif buyuruvchilar uchun qulay sharoitlar yaratildi.",
        img: mosqueImage4
    }
]

const AboutMosque = () => {
    return (
        <>
            <section className='about' id="galereya">
                <div className='container'>
                    <div className='about__row'>
                        <h1 className='about__title'>/ ZANGI OTA haqida</h1>
                        {
                            mosqueData.map((element, i) => {
                                return (
                                    <div className='about__card-block' key={i}>
                                        <div className='about__card'>
                                            <div className='about__card-content'>
                                                <h3 className='about__card-title'>{element.title}</h3>
                                                <p className='about__card-txt'>{element.description}</p>
                                            </div>
                                        </div>
                                        <div className='about__card'>
                                            <img className='about__img' src={element.img} alt="mosque.jpg" />
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMosque;