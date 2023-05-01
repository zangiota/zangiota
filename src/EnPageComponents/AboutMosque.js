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
        description: "The medieval monument of the architect is a place of consolation for thousands of believers. Here is one of the oldest memorial complexes of the capital of Uzbekistan formed around the mausoleum 'Zangi ota'. Zangi ota, translated as 'swarthy father'. The real name of Zangi ota, Aykhoja ibn Tajkhoja, goes back to the descendants of Saint Arslanbab. Zangi ota's father is Tajhoja, grandfather is Abdumalik ota, and his pir is murshidi, spiritual educators, go back to Khoja Ahmad Yassavi through Mansur ota. Aykhoj's mother's name was Gavhar. The year of birth of Zangi ota is not clearly indicated in the sources. However, based on the information written about him, there is reason to assume that he was born at the end of the XII or the beginning of the XIII century and lived in the period 1168-1258.Zangi ota was born and grew up in the Samarkand Darvoz mahalla of Tashkent city. Among the inhabitants of the region, he was known by the name of Zangi (Zangi bobo Himmati) because of his Arab origin and black skin. From the age of three, he began to receive education from his father. After the death of his father, he went to Hakim ota Suleiman Bakirgani, who was a disciple of the caliph of the faithful Sufis Ahmad Yassawi and studied there. He stayed under his tutelage for several years, learned from him the secrets and customs of the way of Yassavi's teaching and became a mature representative of this tariqa.",
        img: mosqueImage1
    },
    {
        id: 2,
        title: "",
        description: "Then he returned to his native Chosh region (present-day Tashkent) and began to educate the population on theological-moral-mystical teaching through mentoring. He trained preachers who spread the teachings of the Prophet Muhammad. The whole life of Zangi ota coincided with a difficult and terrible period for the peoples of Movarounnahr. During the period when the Mongol invaders devastated the country and enslaved the masses, he and his followers strongly supported the people from the enslavers of the invaders, promoting universal ideals such as patriotism, diligence, justice, purity, kindness, mercy, piety among the faithful.Murids and students of Zangi ota, especially Uzun Hassan ota, Sayyid Ota, Sadr ota, Badr ota, contributed to the spread of Islam among the Dashtikipchak Uzbeks, Tatars and Bashkirs of the Volga region and the Urals. Zangiota lived the simple life of a hermit shepherd, taking care of the flocks of the local population, which he earned for his meager life. Namaz and dhikr became the meaning of his life.",
        img: mosqueImage2
    },
    {
        id: 3,
        title: "",
        description: "At the end of the 14th century, by order of the famous commander Amir Temur, a mausoleum was built around the tomb of the late righteous man. It became the first building of the cultural and memorial complex. Construction, which lasted until the beginning of the 20th century.The Namozgoh Mosque is located in the southwestern part of the architectural ensemble. It was built by a local cadi judge in the second half of the 19th century and still receives hundreds of believers. At the beginning of the 15th century, under Mirzo Ulugbek, a portal was built at the entrance of the mausoleum, a makbara decorated with ceramic ornaments and Arabic script. In the 18th and 19th centuries, a madrasah, a Muslim theological school, was built on the territory of the complex, it is a building made of burnt brick with hujras-cells facing the courtyard, in which students lived and studied. The central attraction of the complex, the multi-stone mausoleum of Zangi ota. Inside which, since the time of Amir Temur, a stone tombstone covered with a fine artistic carving has been preserved. Not far from the southern entrance there is an ancient cemetery and the mausoleum of Zangi ota's wife, Anbar Bibi and her mother-in-law Ulugposhsho.",
        img: mosqueImage3
    },
    {
        id: 4,
        title: "",
        description: "According to sources, after the death of her husband from her first marriage, Anbar Bibi was married to Zangi ota and brought to Tashkent. Some sources say that Zangi ota got married at the age of 25, when Anbar Bibi was 40 years old. Some sources reported that Zangi ota was 31 years old when he married Anbar Bibi, and she was 41 years old and had three children from her previous marriage. Anbar Bibi was the daughter of Bogrokhan, a branch of the rulers of Khorezm who ruled the ancient state at the end of the XII century. Despite the fact that she was the daughter of the Shah, Anbar Bibi married a man from a poor and simple family, Zangi ota.Anbar she- earned a living as a midwife- delivering babies to local women. She was an example for the women of that time with her purity and God-fearing manners. Anbar she and Zangi ota probably died a year apart. Towards the end of the 13th century. Zangi ota buried Anbar Bibi and her mother-in-law from her first marriage in his own yard. The historical and religious complex 'Zangi Ota' is revered both among Muslims and among tourists from all over the world. In 2014-2015, restoration works were carried out in the complex and favorable conditions for visitors were created.",
        img: mosqueImage4
    }
]

const AboutMosque = () => {
    return (
        <>
            <section className='about' id="galereya">
                <div className='container'>
                    <div className='about__row'>
                        <h1 className='about__title'>/ About ZANGI OTA</h1>
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