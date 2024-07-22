import DataTable from "react-data-table-component";

const columnsTypeOne = [
  {
    name: "Yük Kapasitesi",
    selector: (row) => row.loadCapacity,
  },
  {
    name: "Kasa Genişliği",
    selector: (row) => row.caseWidth,
  },
  {
    name: "Yerden Yüksekliği",
    selector: (row) => row.groundClearance,
  },
  {
    name: "Kasa Uzunluğu",
    selector: (row) => row.caseLength,
  },
  {
    name: "Toplam Uzunluk",
    selector: (row) => row.totalLength,
  },
  {
    name: "Kasa İçi Ölçüsü",
    selector: (row) => row.insideCaseSize,
  },
  {
    name: "Ok Başı Ölçüsü",
    selector: (row) => row.arrowHeadSize,
  },
  {
    name: "Kapak Yüksekliği",
    selector: (row) => row.coverHeight,
  },
  {
    name: "İlave Yüksekliği",
    selector: (row) => row.additionalHeight,
  },
  {
    name: "Lastik Ebadı",
    selector: (row) => row.tireSize,
  },
];

const columnsTypeTwo = [
  {
    name: "Yük Kapasitesi",
    selector: (row) => row.loadCapacity,
  },
  {
    name: "Kasa Genişliği",
    selector: (row) => row.caseWidth,
  },
  {
    name: "Yerden Yüksekliği",
    selector: (row) => row.groundClearance,
  },
  {
    name: "Kasa Uzunluğu",
    selector: (row) => row.caseLength,
  },
  {
    name: "Toplam Uzunluk",
    selector: (row) => row.totalLength,
  },
  {
    name: "Kasa İçi Ölçüsü",
    selector: (row) => row.insideCaseSize,
  },
  {
    name: "Ok Başı Ölçüsü",
    selector: (row) => row.arrowHeadSize,
  },
  {
    name: "Teker İz Ölçüsü",
    selector: (row) => row.wheelTrackSize,
  },
  {
    name: "Lastik Ebadı",
    selector: (row) => row.tireSize,
  },
];

const columnsTypeThree = [
  {
    name: "Yük Kapasitesi",
    selector: (row) => row.loadCapacity,
    
  },
  {
    name: "Dingil",
    selector: (row) => row.axle,
    
  },
  {
    name: "Kazan",
    selector: (row) => row.boiler,
    
  },
  {
    name: "Pompa",
    selector: (row) => row.pump,
    
  },
  {
    name: "Ok Başı Ölçüsü",
    selector: (row) => row.arrowHeadSize,
    
  },
  {
    name: "Lastik Ebadı",
    selector: (row) => row.tireSize,
    
  },
];


function setColumns(productType) {
  if (!productType) {
    return columnsTypeOne;
  }

  switch (productType) {
    case 1:
      return columnsTypeOne;
    case 2:
      return columnsTypeTwo;
    case 3:
      return columnsTypeThree;
    default:
      return columnsTypeOne;
  }
}

function CustomDatatable({ data, productType }) {
  //set columns based on the product type if it's 1 or 2 or 3

  const columns = setColumns(productType);

  const customStyles = {
    headCells: {
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#bb8e6b",
      },
    },
    rows: {
      style: {
        minHeight: "60px", // Adjust the row height as needed
        backgroundColor: "#D8D8D8", // Set the background color for rows
        "&:hover": {
          backgroundColor: "#F2E9DE", // Set the hover background color for rows
          cursor: "pointer",
        },
      },
    },
  };

  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <h1 className="text-primary">TEKNİK BİLGİLER</h1>
        <h6 className="fw-bold">GENEL</h6>

        <DataTable columns={columns} data={data} customStyles={customStyles} />
      </div>
    </div>
  );
}

export default CustomDatatable;
