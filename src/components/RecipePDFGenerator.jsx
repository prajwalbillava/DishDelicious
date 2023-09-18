import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { pdfjs } from "react-pdf"; // Import PDF-related components
import { saveAs } from "file-saver";
import "../styles/RecipePDFGenerator.css";
import { getRandomAPIKey } from "../Context/getRandom";
import { Document, Page, Text, View, PDFViewer } from "@react-pdf/renderer";

// Configure PDF.js worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function RecipePDFGenerator() {
  const [ingredients, setIngredients] = useState([]);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const apik1 = getRandomAPIKey();
  const { id } = useParams();
  const styles = {
    page: {
      flexDirection: "column",
      margin: 20,
    },
    title: {
      fontSize: 30,
      marginBottom: 10,
    },
    ingredientsList: {
      flexDirection: "column",
    },
    ingredient: {
      fontSize: 20,
      marginBottom: 5,
    },
  };

  useEffect(() => {
    // Function to fetch recipe ingredients using Axios
    const fetchIngredients = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apik1}`
        );
        setIngredients(response.data.ingredients);
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    };

    // Fetch ingredients when the component mounts
    fetchIngredients();
  }, []);

  const handleDownloadPDF = () => {
    // Create a PDF document with ingredients
    const pdfDocument = (
      <Document>
        <Page style={styles.page}>
          <h1 style={styles.title}>Recipe Ingredients</h1>
          <ul style={styles.title}>
            {ingredients.map((ingredient, index) => (
              <li key={index} style={styles.ingredient}>
                {ingredient.name} : {ingredient.amount.metric.value}
                {ingredient.amount.metric.unit}
              </li>
            ))}
          </ul>
        </Page>
      </Document>
    );

    // Generate a blob from the PDF document
    pdf(pdfDocument)
      .toBlob()
      .then((blob) => {
        // Save the blob as a PDF file
        saveAs(blob, "recipe_ingredients.pdf");
      });
  };

  return (
    <div className="pdfmain">
      {ingredients.length > 0 ? (
        <div>
          {/* Display recipe ingredients */}
          <h1 style={styles.title}>Recipe Ingredients</h1>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.name} : {ingredient.amount.metric.value}
                {ingredient.amount.metric.unit}
              </li>
            ))}
          </ul>

          {/* PDF viewer */}

          <PDFViewer width={600} height={400} className="iframe-container">
            <Document>
              <Page size="A4">
                <View style={styles.page}>
                  <Text style={styles.title}>Recipe Ingredients</Text>
                  <View style={styles.ingredientsList}>
                    {ingredients.map((ingredient, index) => (
                      <Text key={index} style={styles.ingredient}>
                        {" "}
                        {ingredient.name} : {ingredient.amount.metric.value}
                        {ingredient.amount.metric.unit}
                      </Text>
                    ))}
                  </View>
                </View>
              </Page>
            </Document>
          </PDFViewer>

          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      ) : (
        <div className="loaderpdf">
          <div class="custom-loader"></div>
        </div>
      )}
    </div>
  );
}

export default RecipePDFGenerator;
