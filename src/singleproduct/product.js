import React from "react";
import css from "../css/index.module.css";
import ProductGalleryLarge from "./productgallerylarge";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../custom-hooks/firebase";

export default function Product(props) {


async function addData() {
  const docRef = await addDoc(collection(db, "smartphones"), {
    "article": 4723290,
    "fast_spec": "6x2.5 ГГц, 3 Гб, 1 SIM, IPS, 1792x828, камера 12 Мп, NFC, 4G, GPS, 2942 мА*ч",
    "fast_search": "6.1 Смартфон Apple iPhone Xr 64 ГБ желтый",
    "brand": "Apple",
    "price": "41999",
    "model": "iPhone Xr",
    "available_products": [{
        "64 Гб": {
            "White": 4,
            "Yellow": 2,
            "Red": 3,
            "Orange": 0,
            "Blue": 6,
            "Black": 2
        },
        "128 Гб": {
            "White": 0,
            "Yellow": 0,
            "Red": 1,
            "Orange": 0,
            "Blue": 2,
            "Black": 0
        }
    }],
    "dimensions_width": "75.7 мм",
    "dimensions_height": "150.9 мм",
    "dimensions_thin": "8.3 мм",
    "dimensions_weight": "194 г",
    "add_info_ears": false,
    "add_info_complete_set": ["кабель Lightning", "документация", "скрепка для извлечения слота SIM-карты"],
    "add_info_bio_protection": "сканер лица",
    "add_info_led_notifications": false,
    "add_info": ["объемный стереозвук", "поддержка Dolby Vision"],
    "tech_batt_type": "Li-Ion",
    "tech_batt_vol": "2942 мА*ч",
    "tech_batt_replace": false,
    "tech_batt_charger_v": "нет ЗУ в комплекте",
    "tech_batt_charger_power": false,
    "tech_batt_charger_wireless": true,
    "tech_batt_fastcharge": "USB Power Delivery",
    "tech_estimated_audio_time": "65 ч",
    "tech_estimated_video_time": "16 ч",
    "tech_audio_cpu": false,
    "tech_audio_stereo": true,
    "tech_audio_formats": ["LPCM", "AC3", "EAC3", "AAX", "AAX+", "FLAC", "AAC", "MP3"],
    "tech_com_bluetooth": "5.0",
    "tech_com_wifi": "5 (802.11ac)",
    "tech_com_nfc": true,
    "tech_com_nfc_technology": "Apple Pay",
    "tech_com_navigation": ["ГЛОНАСС", "GPS", "A-GPS"],
    "tech_interface_charge": "Lightning 8-pin",
    "tech_interface_audio": "Lightning 8-pin",
    "tech_interface_otg": false,
    "tech_camera_front": 1,
    "tech_camera_front_mpx": "7 Мп",
    "tech_camera_front_aperture": 2.2,
    "tech_camera_front_res": null,
    "tech_camera_front_af": true,
    "tech_camera_front_flash": true,
    "tech_camera_front_tech": "сенсор BSI",
    "tech_camera_front_modes": ["эффект Боке", "режим «Портрет»", "режим HDR", "Animoji и Memoji", "автоматическая стабилизация изображения", "серийная съемка", "контроль экспозиции", "режим таймера"],
    "tech_camera_rear": 1,
    "tech_camera_rear_mpx": "12 Мп",
    "tech_camera_rear_app": "1.8",
    "tech_camera_rear_af": true,
    "tech_camera_rear_flash_type": "кольцевая светодиодная",
    "tech_camera_rear_zoom": "5-кратный цифровой зум",
    "tech_camera_rear_optics": null,
    "tech_camera_rear_options": ["защита объектива сапфировым стеклом", "гибридный ИК-фильтр", "автофокус с технологией Focus Pixels", "шестилинзовый объектив", "сенсор камеры BSI"],
    "tech_camera_rear_modes": ["функция Smart HDR", "эффект Боке", "режим «Портрет»", "расширенный цветовой диапазон для фотографий и Live Photos", "панорамная съемка", "фокусировка касанием", "устранение эффекта красных глаз", "серийная съемка", "контроль экспозиции", "режим таймера", "географические метки", "автоматическая стабилизация изображения"],
    "tech_camera_video": ["Ultra HD 4K", "Full HD", "HD"],
    "tech_camera_video_res": ["3840x2160 (60 кадр./сек.)", "1920x1080 (60 кадр./сек.)", "1280x720 (30 кадр./сек.)"],
    "tech_camera_video_slow": ["1920x1080 (120 кадр./сек.)", "1920x1080 (240 кадр./сек.)"],
    "tech_camera_video_zoom": "3-кратный цифровой зум",
    "tech_camera_video_formats": "MOV , M4V , AVI , MP4",
    "tech_camera_video_modes": ["фото во время видеозаписи", "режим «Таймлапс»", "кинематографическая стабилизация видео", "следящий автофокус", "привязка видео к месту съемки"],
    "tech_body": ["металл", "стекло"],
    "tech_body_ip": "67",
    "tech_body_prot": ["олеофобное покрытие", "защита от пыли и влаги"],
    "tech_cpu": "Apple A12 Bionic",
    "tech_cpu_kernels": 6,
    "tech_cpu_freq": "2.5 ГГц",
    "tech_cpu_nm": "7 нм",
    "tech_cpu_gpu": "Apple GPU",
    "tech_ram": "3 Гб",
    "tech_memory": "128 Гб",
    "tech_sd_card": false,
    "tech_sensors": ["барометр", "акселерометр", "датчик приближения", "датчик освещенности", "гироскоп", "Компас"],
    "tech_mobile_2g": ["GSM 900", "GSM 1900", "GSM 850", "GSM 1800"],
    "tech_mobile_3g": ["UMTS 900", "UMTS 2100", "UMTS 850", "UMTS 1900", "UMTS 1700"],
    "tech_mobile_4g": true,
    "tech_mobile_4g_adv": true,
    "tech_mobile_4g_range": ["LTE 800 (B19)", "LTE 850 (B26)", "LTE 1900 (B25)", "LTE 1700 (B4)", "LTE 850 (B18)", "LTE 700 (B13)", "LTE 700 (B28)", "LTE 700 (B17)", "LTE 850 (B5)", "LTE 1900 (B2)", "LTE 1800 (B3)", "LTE 2100 (B1)", "LTE 800 (B20)", "LTE 900 (B8)", "LTE 2600 (B7)", "LTE 700 (B12)"],
    "tech_mobile_5g": false,
    "tech_mobile_volte": true,
    "tech_screen_colors": 16700000,
    "tech_screen_diag": 6.1,
    "tech_screen_freq": 60,
    "tech_screen_pixel_res": 326,
    "tech_screen_res": "1792x828",
    "tech_screen_technology": "IPS",
    "tech_sim_esim": true,
    "tech_sim_format": "Nano-SIM",
    "tech_sim_quantity": 1
  });
  console.log("Document written with ID: ", docRef.id);
}


  return (
    <>
    
      <div className={css.productGallery1}>
        <ProductGalleryLarge id={props.id}/>
        <div className={css.productGallery3}></div>
      </div>
    </>
  );
}
