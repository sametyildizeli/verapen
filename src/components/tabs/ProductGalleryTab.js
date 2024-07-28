import React, { useState, useEffect } from 'react';
import { productsGallery } from '@utils/data';
import ProductGallery from '@components/custom/ProductGallery';

const ProductGalleryTab = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const [activeSubCategory, setActiveSubCategory] = useState('');

  useEffect(() => {
    const firstCategory = Object.keys(productsGallery.categories)[0];
    setActiveCategory(firstCategory);
    setActiveSubCategory(Object.keys(productsGallery.categories[firstCategory].subcategories)[0]);
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveSubCategory(Object.keys(productsGallery.categories[category].subcategories)[0]);
  };

  const handleSubCategoryClick = (subCategory) => {
    setActiveSubCategory(subCategory);
  };

  return (
    <section className="portfolio bg-light ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              <h2>Ürün Modelleri</h2>
              <p>Üretmiş olduğumuz ürünlerimize ve detaylara tıklayarak ulaşabilirsiniz.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-6">
            <div className="tab-button mb-5">
              <ul className="nav nav-pills d-flex justify-content-center" id="pills-tab" role="tablist">
                {Object.keys(productsGallery.categories).map((category) => (
                  <li className="nav-item" role="presentation" key={category}>
                    <button
                      className={`nav-link ${activeCategory === category ? 'active' : ''}`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {activeCategory && (
            <div className="col-lg-12 col-md-6">
              <div className="tab-button mb-5">
                <ul className="nav nav-pills d-flex justify-content-center" id="pills-tab" role="tablist">
                  {Object.keys(productsGallery.categories[activeCategory].subcategories).map((subCategory) => (
                    <li className="nav-item" role="presentation" key={subCategory}>
                      <button
                        className={`nav-link ${activeSubCategory === subCategory ? 'active' : ''}`}
                        onClick={() => handleSubCategoryClick(subCategory)}
                      >
                        {subCategory}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="damperli-romork" role="tabpanel" aria-labelledby="damperli-romork-tab">
              <ProductGallery category={activeCategory} subCategory={activeSubCategory} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGalleryTab;
