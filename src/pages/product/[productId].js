import CustomPageHeader from "@components/common/custom/CustomPageHeader";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";
import CustomDatatable from "@components/datatable/datatable";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const ProductData = [
  {
    key: 0,
    id: "0",
    title: `ÇİFT DİNGİL GERİYE DEVİRMELİ RÖMORK`,
    videoLink: "",
    productImg: "/slider-product-2.png",
    productType: 1,
    data: [
      {
        loadCapacity: "8 Ton",
        caseWidth: "2.20 m",
        groundClearance :"2.40 m",
        caseLength: "4.00 m",
        totalLength: "5.45 m",
        insideCaseSize: "1.20 m",
        arrowHeadSize :"1.45 m",
        coverHeight:"60 Cm",
        additionalHeight: "30 Cm x 2Ad.",
        tireSize: "12.5/80-15.3",
      },
      {
        loadCapacity: "10 Ton",
        caseWidth: "2.20 m",
        groundClearance :"2.40 m",
        caseLength: "4.50 m",
        totalLength: "5.95 m",
        insideCaseSize: "1.20 m",
        arrowHeadSize :"1.45 m",
        coverHeight:"60 Cm",
        additionalHeight: "30 Cm x 2Ad.",
        tireSize: "12.5/80-15.3",
      },
      {
        loadCapacity: "12 Ton",
        caseWidth: "2.30 m",
        groundClearance :"2.40 m",
        caseLength: "5.20 m",
        totalLength: "6.65 m",
        insideCaseSize: "1.20 m",
        arrowHeadSize :"1.45 m",
        coverHeight:"60 Cm",
        additionalHeight: "30 Cm x 2Ad.",
        tireSize: "400/60-15.5",
      },
      {
        loadCapacity: "14 Ton",
        caseWidth: "2.30 m",
        groundClearance :"2.50 m",
        caseLength: "5.50 m",
        totalLength: "6.95 m",
        insideCaseSize: "1.30 m",
        arrowHeadSize :"1.45 m",
        coverHeight:"70 Cm",
        additionalHeight: "30 Cm x 2Ad.",
        tireSize: "400/60-15.5",
      },
      {
        loadCapacity: "16 Ton",
        caseWidth: "2.40 m",
        groundClearance :"2.60 m",
        caseLength: "5.80 m",
        totalLength: "7.25 m",
        insideCaseSize: "1.40 m",
        arrowHeadSize :"1.45 m",
        coverHeight:"70 Cm",
        additionalHeight: "35 Cm x 2Ad.",
        tireSize: "385/65-22.5",
      },
    ],
  },
  {
    key: 1,
    id: "1",
    title: `TANDEM DİNGİL GERİYE DEVİRMELİ RÖMORK`,
    videoLink: "",
    productImg: "/slider-product-3.png",
    productType: 1,
    data: [
      {
        loadCapacity: "8 Ton",
        caseWidth: "2.20 m",
        groundClearance :"2.35 m",
        caseLength: "4.30 m",
        totalLength: "5.40 m",
        insideCaseSize: "1.20 m",
        arrowHeadSize :"1.40 m",
        coverHeight:"60 Cm",
        additionalHeight: "30 Cm x 2Ad.",
        tireSize: "12.5/80-15.3",
      },
      {
        loadCapacity: "10 Ton",
        caseWidth: "2.20 m",
        groundClearance :"2.35 m",
        caseLength: "4.50 m",
        totalLength: "5.90 m",
        insideCaseSize: "1.20 m",
        arrowHeadSize :"1.40 m",
        coverHeight:"60 Cm",
        additionalHeight: "30 Cm x 2Ad.",
        tireSize: "400/60-15.5",
      },
      {
        loadCapacity: "12 Ton",
        caseWidth: "2.20 m",
        groundClearance :"2.45 m",
        caseLength: "4.80 m",
        totalLength: "6.20 m",
        insideCaseSize: "1.30 m",
        arrowHeadSize :"1.40 m",
        coverHeight:"60 Cm",
        additionalHeight: "35 Cm x 2Ad.",
        tireSize: "400/60-15.5",
      },
      {
        loadCapacity: "12 Ton",
        caseWidth: "2.30 m",
        groundClearance :"2.45 m",
        caseLength: "5.20 m",
        totalLength: "6.60 m",
        insideCaseSize: "1.30 m",
        arrowHeadSize :"1.40 m",
        coverHeight:"60 Cm",
        additionalHeight: "35 Cm x 2Ad.",
        tireSize: "400/60-15.5",
      },
      {
        loadCapacity: "14 Ton",
        caseWidth: "2.30 m",
        groundClearance :"2.45 m",
        caseLength: "5.50 m",
        totalLength: "6.90 m",
        insideCaseSize: "1.40 m",
        arrowHeadSize :"1.40 m",
        coverHeight:"70 Cm",
        additionalHeight: "35 Cm x 2Ad.",
        tireSize: "400/60-15.5",
      },
      {
        loadCapacity: "16 Ton",
        caseWidth: "2.40 m",
        groundClearance :"2.60 m",
        caseLength: "6.00 m",
        totalLength: "7.40 m",
        insideCaseSize: "1.40 m",
        arrowHeadSize :"1.40 m",
        coverHeight:"70 Cm",
        additionalHeight: "35 Cm x 2Ad.",
        tireSize: "385/65 R 22.5",
      },
    ],
  },
  {
    key: 2,
    id: "2",
    title: `TEK DİNGİL GERİYE DEVİRMELİ RÖMORK`,
    videoLink: "",
    productImg: "/slider-product-4.png",
    productType: 1,
    data: [
      {
        loadCapacity: "5 Ton",
        caseWidth: "2.00 m",
        groundClearance :"2.10 m",
        caseLength: "3.30 m",
        totalLength: "4.65 m",
        insideCaseSize: "1.10 m",
        arrowHeadSize :"1.35 m",
        coverHeight:"50 Cm",
        additionalHeight: "30 Cm x 2Ad.",
        tireSize: "12.5/80-15.3",
      },
      {
        loadCapacity: "6 Ton",
        caseWidth: "2.00 m",
        groundClearance :"2.10 m",
        caseLength: "3.50 m",
        totalLength: "4.85 m",
        insideCaseSize: "1.10 m",
        arrowHeadSize :"1.35 m",
        coverHeight:"50 Cm",
        additionalHeight: "30 Cm x 2Ad.",
        tireSize: "12.5/80-15.3",
      },
      {
        loadCapacity: "7 Ton",
        caseWidth: "2.00 m",
        groundClearance :"2.10 m",
        caseLength: "3.80 m",
        totalLength: "5.15 m",
        insideCaseSize: "1.10 m",
        arrowHeadSize :"1.35 m",
        coverHeight:"50 Cm",
        additionalHeight: "30 Cm x 2Ad.",
        tireSize: "12.5/80-15.3",
      },
      {
        loadCapacity: "8 Ton",
        caseWidth: "2.20 m",
        groundClearance :"2.20 m",
        caseLength: "3.80 m",
        totalLength: "5.15 m",
        insideCaseSize: "1.20 m",
        arrowHeadSize :"1.40 m",
        coverHeight:"50 Cm",
        additionalHeight: "35 Cm x 2Ad.",
        tireSize: "400/60-15.5",
      },
    ],
  },
  {
    key: 3,
    id: "3",
    title: `SANTRAFÜJ POMPALI GALVANİZ SU TANKERİ`,
    videoLink: "",
    productImg: "/slider-product-5.png",
    productType: 3,
    data: [
      {
        loadCapacity: "3 Ton",
        axle: "Tek Dingil",
        boiler: "2 Mm Galvaniz Sac",
        pump: "Santrafüj",
        arrowHeadSize: "1.30 m",
        tireSize: "12.5/80-15.3",
      },
      {
        loadCapacity: "5 Ton",
        axle: "Tek Dingil",
        boiler: "2mm Galvaniz Sac",
        pump: "Santrafüj",
        arrowHeadSize: "1.30 m",
        tireSize: "12.5/80-15.3",
      },
      {
        loadCapacity: "6 Ton",
        axle: "Tek Dingil",
        boiler: "2 Mm Galvaniz Sac",
        pump: "Santrafüj",
        arrowHeadSize: "1.30 m",
        tireSize: "12.5/80-15.3",
      },
      {
        loadCapacity: "8 Ton",
        axle: "Tek Dingil",
        boiler: "2,5 Mm Galvaniz Sac",
        pump: "Santrafüj",
        arrowHeadSize: "1.35 m",
        tireSize: "400/60-15.5",
      },
      {
        loadCapacity: "10 Ton",
        axle: "Tandem Dingil",
        boiler: "2,5 Mm Galvaniz Sac",
        pump: "Santrafüj",
        arrowHeadSize: "1.40 m",
        tireSize: "400/60-15.5",
      },
      {
        loadCapacity: "12 Ton",
        axle: "Tandem Dingil",
        boiler: "2,5 Mm Galvaniz Sac",
        pump: "Santrafüj",
        arrowHeadSize: "1.40 m",
        tireSize: "400/60-15.5",
      },
      {
        loadCapacity: "14 Ton",
        axle: "Tandem Dingil",
        boiler: "3 Mm Galvaniz Sac",
        pump: "Santrafüj",
        arrowHeadSize: "1.45 m",
        tireSize: "400/60-15.5",
      },
      {
        loadCapacity: "16 Ton",
        axle: "Tandem Dingil",
        boiler: "3 Mm Galvaniz Sac",
        pump: "Santrafüj",
        arrowHeadSize: "1.45 m",
        tireSize: "435/50 R19.5",
      },
      {
        loadCapacity: "18 Ton",
        axle: "Tandem Dingil",
        boiler: "4 Mm Galvaniz Sac",
        pump: "Santrafüj",
        arrowHeadSize: "1.45 m",
        tireSize: "435/50 R19.5",
      },
      {
        loadCapacity: "20 Ton",
        axle: "Tandem Dingil",
        boiler: "4 Mm Gal",
        pump: "Santrafüj",
        arrowHeadSize: "1.45 m",
        tireSize: "435/50 R19.5",
      },
    ],
  },
  // {
  //   key: 4,
  //   id: "4",
  //   title: `SIVI GÜBRE TAŞIMA VE DAĞITMA TANKERİ`,
  //   videoLink: "",
  //   productImg: "/slider-product-6.png",
  //   data: [],
  // },
  {
    key: 4,
    id: "4",
    title: `TEK DiNGiL iKi LASTiK\nHAVUZ KASA DAMPERLi RÖMORK`,
    videoLink: "",
    productImg: "/slider-product-7.png",
    productType: 1,
    data: [
      {
        loadCapacity: "5 Ton",
        caseWidth: "2.00 m",
        groundClearance :"1.90 m",
        caseLength: "3.00 m",
        totalLength: "4.35 m",
        insideCaseSize: "1.10 m",
        arrowHeadSize :"1.35 m",
        coverHeight:"80 Cm",
        additionalHeight: "30 Cm",
        tireSize: "12.5/80-15.3",
      },
      {
        loadCapacity: "6 Ton",
        caseWidth: "2.00 m",
        groundClearance :"1.95 m",
        caseLength: "3.50 m",
        totalLength: "4.85 m",
        insideCaseSize: "1.15 m",
        arrowHeadSize :"1.35 m",
        coverHeight:"80 Cm",
        additionalHeight: "30 Cm",
        tireSize: "12.5/80-15.3",
      },
      {
        loadCapacity: "8 Ton",
        caseWidth: "2.20 m",
        groundClearance :"2.05 m",
        caseLength: "3.80 m",
        totalLength: "5.15 m",
        insideCaseSize: "1.25 m",
        arrowHeadSize :"1.35 m",
        coverHeight:"90 Cm",
        additionalHeight: "35 Cm",
        tireSize: "400/60-15.5",
      },
    ],
  },
  {
    key: 5,
    id: "5",
    title: `TANDEM DiNGiL DÖRT LASTiK \n DAMPERLİ HAVUZ KASA RÖMORK`,
    videoLink: "",
    productImg: "/slider-product-8.png",
    productType: 1,
    data: [
      {
        loadCapacity: "12 Ton",
        caseWidth: "2.40 m",
        groundClearance :"2.55 m",
        caseLength: "4.00 m",
        totalLength: "5.35 m",
        insideCaseSize: "1.85 m",
        arrowHeadSize :"1.35 m",
        coverHeight:"1.50 m",
        additionalHeight: "35 Cm",
        tireSize: "400/60-15.5",
      },
      {
        loadCapacity: "14 Ton",
        caseWidth: "2.40 m",
        groundClearance :"2.55 m",
        caseLength: "4.50 m",
        totalLength: "5.95 m",
        insideCaseSize: "1.85 m",
        arrowHeadSize :"1.45 m",
        coverHeight:"1.50 m",
        additionalHeight: "35 Cm",
        tireSize: "400/60-15.5",
      },
      {
        loadCapacity: "16 Ton",
        caseWidth: "2.40 m",
        groundClearance :"2.65 m",
        caseLength: "5.00 m",
        totalLength: "6.45 m",
        insideCaseSize: "1.95 m",
        arrowHeadSize :"1.45 m",
        coverHeight:"1.60 m",
        additionalHeight: "35 Cm",
        tireSize: "385/65-22.5",
      },
      {
        loadCapacity: "18 Ton",
        caseWidth: "2.40 m",
        groundClearance :"2.65 m",
        caseLength: "5.50 m",
        totalLength: "6.95 m",
        insideCaseSize: "1.95 m",
        arrowHeadSize :"1.45 m",
        coverHeight:"1.60 m",
        additionalHeight: "35 Cm",
        tireSize: "385/65-22.5",
      },
    ],
  },
  {
    key: 6,
    id: "6",
    title: `ÜÇ DiNGiL ALTI LASTiK \n TRİDEM DAMPERLi RÖMORK`,
    videoLink: "",
    productImg: "/slider-product-9.png",
    productType: 1,
    data: [
      {
        loadCapacity: "20 Ton",
        caseWidth: "2.40 m",
        groundClearance :"3.07 m",
        caseLength: "6.00 m",
        totalLength: "7.45 m",
        insideCaseSize: "1.95 m",
        arrowHeadSize :"1.45 m",
        coverHeight:"1.60 m",
        additionalHeight: "35 Cm",
        tireSize: "385/65-22.5",
      },
      {
        loadCapacity: "25 Ton",
        caseWidth: "2.40 m",
        groundClearance :"3.07 m",
        caseLength: "7.00 m",
        totalLength: "8.45 m",
        insideCaseSize: "1.95 m",
        arrowHeadSize :"1.45 m",
        coverHeight:"1.60 m",
        additionalHeight: "35 Cm",
        tireSize: "385/65-22.5",
      },
      {
        loadCapacity: "28 Ton",
        caseWidth: "2.40 m",
        groundClearance :"3.12 m",
        caseLength: "7.50 m",
        totalLength: "8.95 m",
        insideCaseSize: "2.00 m",
        arrowHeadSize :"1.45 m",
        coverHeight:"1.60 m",
        additionalHeight: "40 Cm",
        tireSize: "385/65-22.5",
      },
    ],
  },
  {
    key: 7,
    id: "7",
    title: `BORU TAŞIMA RÖMORK`,
    videoLink: "",
    productImg: "/slider-product-10.png",
    productType: 2,
    data: [
      {
        loadCapacity: "4 Ton",
        caseWidth: "2.40 m",
        groundClearance :"2.50 m",
        caseLength: "5.00 m",
        totalLength: "6.35 m",
        insideCaseSize: "1.50 m",
        arrowHeadSize :"1.35 m",
        wheelTrackSize: "Müşteri Özel İsteği",
        tireSize: "12.5/80-15.3",
      },
      {
        loadCapacity: "4 Ton",
        caseWidth: "2.40 m",
        groundClearance :"2.50 m",
        caseLength: "5.00 m",
        totalLength: "6.35 m",
        insideCaseSize: "2.00 m",
        arrowHeadSize :"1.35 m",
        wheelTrackSize: "Müşteri Özel İsteği",
        tireSize: "12.5/80-15.3",
      },
      {
        loadCapacity: "4 Ton",
        caseWidth: "2.40 m",
        groundClearance :"2.50 m",
        caseLength: "6.00 m",
        totalLength: "7.35 m",
        insideCaseSize: "1.50 m",
        arrowHeadSize :"1.35 m",
        wheelTrackSize: "Müşteri Özel İsteği",
        tireSize: "12.5/80-15.3",
      },
      {
        loadCapacity: "4 Ton",
        caseWidth: "2.40 m",
        groundClearance :"2.50 m",
        caseLength: "6.00 m",
        totalLength: "7.35 m",
        insideCaseSize: "2.00 m",
        arrowHeadSize :"1.35 m",
        wheelTrackSize: "Müşteri Özel İsteği",
        tireSize: "12.5/80-15.3",
      },
    ],
  },
];

export default function ProductDetailPage() {
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    if (productId) {
      console.log("productId", productId);
    } else {
      console.log("productId not found");
      // Link.push("/404");
    }
  }, [productId]);

  return (
    <Layout>
      <Navbar navDark />
      <CustomPageHeader title="ÜRÜN DETAY" />

      <div className="container mt-5">
        <div className="row align-items-center">
          <h2 className="text-primary mb-3 text-lg-center">
            {ProductData[productId]?.title}
          </h2>
        </div>
        <div className="row align-items-center mt-5">
          <div className="col-lg-12">
            <div className="about-left text-lg-center mb-32 mb-lg-0">
              <img
                src={ProductData[productId]?.productImg}
                // height={460}
                // style={{ height: "460px" }}
                alt="About"
                className="img-fluid  product-detail-img"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <MediaProductGallery /> */}
      <CustomDatatable
        data={ProductData[productId]?.data}
        productType={ProductData[productId]?.productType}
      />
      <Footer footerLight />
    </Layout>
  );
}
