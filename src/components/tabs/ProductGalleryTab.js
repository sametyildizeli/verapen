import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { productsGallery } from '@utils/data';
import ProductGallery from '@components/custom/ProductGallery';

const ProductGalleryTab = () => {
  const router = useRouter();
  const { category: categoryParam } = router.query;

  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [activeSubCategory, setActiveSubCategory] = useState('All');

  // Function to flatten all images
  const getAllImages = () => {
    return Object.values(productsGallery.categories).flatMap(category =>
      Object.values(category.subcategories).flat()
    );
  };

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
      if (categoryParam === 'Tümü') {
        setActiveSubCategory('All');
      } else {
        const subCategory = Object.keys(productsGallery.categories[categoryParam].subcategories)[0];
        setActiveSubCategory(subCategory);
      }
    } else {
      setActiveCategory('Tümü');
      setActiveSubCategory('All');
    }
  }, [categoryParam]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === 'Tümü') {
      setActiveSubCategory('All');
    } else {
      const subCategory = Object.keys(productsGallery.categories[category].subcategories)[0];
      setActiveSubCategory(subCategory);
    }
  };

  const handleSubCategoryClick = (subCategory) => {
    setActiveSubCategory(subCategory);
  };

  const allImages = getAllImages();

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
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeCategory === 'Tümü' ? 'active' : ''}`}
                    onClick={() => handleCategoryClick('Tümü')}
                  >
                    Tümü
                  </button>
                </li>
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

          {activeCategory && activeCategory !== 'Tümü' && (
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
              {activeCategory === 'Tümü' ? (
                <ProductGallery images={allImages} />
              ) : (
                <ProductGallery category={activeCategory} subCategory={activeSubCategory} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGalleryTab;
