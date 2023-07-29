import React, { useState, useEffect } from "react";
import { ProductData, ProductType } from "../fakerData";
import "./SearchResult.scss";
import { VscStarFull, VscHeartFilled, VscHeart } from "react-icons/vsc";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Navbar from "../components/Navbar";

const SearchResult: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<ProductType[]>([]);
  const [collapsedCategories, setCollapsedCategories] = useState<{
    [category: string]: boolean;
  }>({
    BRAND: false,
    PRICE: false,
    RATING: false,
  });

  useEffect(() => {
    const filteredProducts = ProductData.filter((product) => {
      const hasSelectedBrand =
        selectedBrand.length === 0 || selectedBrand.includes(product.brand);
      const hasSelectedPrice =
        selectedPrice.length === 0 ||
        (selectedPrice.includes("Under 500")
          ? Number(product.discountedPrice) <= 500
          : Number(product.discountedPrice) > 1000 &&
            Number(product.discountedPrice) <= 3000);
      const hasSelectedRating =
        selectedRating.length === 0 || selectedRating.includes(product.rating);
      return hasSelectedBrand && hasSelectedPrice && hasSelectedRating;
    });

    setDisplayedProducts(filteredProducts);
  }, [selectedBrand, selectedPrice, selectedRating]);

  const handleBrandChange = (brand: string) => {
    if (selectedBrand.includes(brand)) {
      setSelectedBrand(selectedBrand.filter((item) => item !== brand));
    } else {
      setSelectedBrand([...selectedBrand, brand]);
    }
  };

  const handlePriceChange = (priceRange: string) => {
    if (selectedPrice.includes(priceRange)) {
      setSelectedPrice(selectedPrice.filter((item) => item !== priceRange));
    } else {
      setSelectedPrice([...selectedPrice, priceRange]);
    }
  };

  const handleRatingChange = (rating: number) => {
    if (selectedRating.includes(rating)) {
      setSelectedRating(selectedRating.filter((item) => item !== rating));
    } else {
      setSelectedRating([...selectedRating, rating]);
    }
  };

  const handleToggleFavorite = (productIndex: number) => {
    setDisplayedProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product, index) => {
        if (index === productIndex) {
          return { ...product, isFavourite: !product.isFavourite };
        }
        return product;
      });
      return updatedProducts;
    });
  };

  const handleCategoryToggle = (category: string) => {
    setCollapsedCategories((prevCollapsedCategories) => ({
      ...prevCollapsedCategories,
      [category]: !prevCollapsedCategories[category],
    }));
  };

  return (
    <div className="search-page">
      <Navbar />
      <div className="main">
        <div className="sidebar">
          <div className="filter-section">
            <h2>Search Results</h2>
            <div className="filter-category">
              <div
                className="category-header"
                onClick={() => handleCategoryToggle("BRAND")}
              >
                <h3>BRAND</h3>
                {collapsedCategories["BRAND"] ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowUp />
                )}
              </div>
              {!collapsedCategories["BRAND"] && (
                <>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedBrand.includes("Mango")}
                      onChange={() => handleBrandChange("Mango")}
                    />
                    Mango
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedBrand.includes("H&M")}
                      onChange={() => handleBrandChange("H&M")}
                    />
                    H&M
                  </label>
                </>
              )}
              <hr />
            </div>
            <div className="filter-category">
              <div
                className="category-header"
                onClick={() => handleCategoryToggle("PRICE")}
              >
                <h3>PRICE</h3>
                {collapsedCategories["PRICE"] ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowUp />
                )}
              </div>
              {!collapsedCategories["PRICE"] && (
                <>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedPrice.includes("Under 500")}
                      onChange={() => handlePriceChange("Under 500")}
                    />
                    Under 500
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedPrice.includes("1000 To 3000")}
                      onChange={() => handlePriceChange("1000 To 3000")}
                    />
                    1000 To 3000
                  </label>
                </>
              )}
              <hr />
            </div>
            <div className="filter-category">
              <div
                className="category-header"
                onClick={() => handleCategoryToggle("RATING")}
              >
                <h3>RATING</h3>
                {collapsedCategories["RATING"] ? (
                  <MdKeyboardArrowDown />
                ) : (
                  <MdKeyboardArrowUp />
                )}
              </div>
              {!collapsedCategories["RATING"] && (
                <>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedRating.includes(5)}
                      onChange={() => handleRatingChange(5)}
                    />
                    <VscStarFull size={16} color="#FFC107" />
                    <VscStarFull size={16} color="#FFC107" />
                    <VscStarFull size={16} color="#FFC107" />
                    <VscStarFull size={16} color="#FFC107" />
                    <VscStarFull size={16} color="#FFC107" />
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedRating.includes(4)}
                      onChange={() => handleRatingChange(4)}
                    />
                    <VscStarFull size={16} color="#FFC107" />
                    <VscStarFull size={16} color="#FFC107" />
                    <VscStarFull size={16} color="#FFC107" />
                    <VscStarFull size={16} color="#FFC107" />
                    <VscStarFull size={16} color="#D3D3D3" />
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedRating.includes(3)}
                      onChange={() => handleRatingChange(3)}
                    />
                    <VscStarFull size={16} color="#FFC107" />
                    <VscStarFull size={16} color="#FFC107" />
                    <VscStarFull size={16} color="#FFC107" />
                    <VscStarFull size={16} color="#D3D3D3" />
                    <VscStarFull size={16} color="#D3D3D3" />
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedRating.includes(2)}
                      onChange={() => handleRatingChange(2)}
                    />
                    <VscStarFull size={16} color="#FFC107" />
                    <VscStarFull size={16} color="#FFC107" />
                    <VscStarFull size={16} color="#D3D3D3" />
                    <VscStarFull size={16} color="#D3D3D3" />
                    <VscStarFull size={16} color="#D3D3D3" />
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedRating.includes(1)}
                      onChange={() => handleRatingChange(1)}
                    />
                    <VscStarFull size={16} color="#FFC107" />
                    <VscStarFull size={16} color="#D3D3D3" />
                    <VscStarFull size={16} color="#D3D3D3" />
                    <VscStarFull size={16} color="#D3D3D3" />
                    <VscStarFull size={16} color="#D3D3D3" />
                  </label>
                </>
              )}
              <hr />
            </div>
          </div>
        </div>
        <div className="grid-container">
          {displayedProducts.map((product, index) => (
            <div key={index} className="product-card">
              <div className="image-wrapper">
                <img src={product.imgUrl} alt={product.productName} />
                <div className="view-product-text">View Product</div>
              </div>
              <div
                className="heart-icon"
                onClick={() => handleToggleFavorite(index)}
              >
                {product.isFavourite ? (
                  <VscHeartFilled size={24} color="red" />
                ) : (
                  <VscHeart size={24} color="white" />
                )}
              </div>
              <div className="product-info">
                <p className="product-name">{product.productName}</p>
                <div className="price">
                  <span className="original-price">
                    Rs {parseFloat(product.originalPrice).toFixed(0)}
                  </span>
                  <span className="discounted-price">
                    Rs {parseFloat(product.discountedPrice).toFixed(0)}
                  </span>
                </div>
                <div className="rating">
                  {Array.from(Array(product.rating).keys()).map((_, index) => (
                    <VscStarFull key={index} size={16} color="#FFC107" />
                  ))}
                  <div className="review">(219)</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
