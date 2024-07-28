/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

import SectionTitle from '../common/SectionTitle';
import MediaGallery from '@components/media-gallery/media-gallery';
import MediaGalleryVideo from '@components/media-gallery-video/media-gallery-video';
import CampaignGallery from '@components/custom/CampaignGallery';

const ProductsTab = () => {
  return (
    <section className="feature-tab-section ptb-60 bg-light">
      <div className="container">
        <div className="row justify-content-center align-content-center">
          <div className="col-md-10 col-lg-6">
            <SectionTitle
              // subtitle=""
              // title="Kampanya ve Duyurular"
              // description="Dolore consequat sint voluptate ipsum et et voluptate laborum do ea adipisicing et."
              centerAlign
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul
              className="nav justify-content-center feature-tab-list-2 mb-0"
              id="nav-tab"
              role="tablist"
            >
              <li className="nav-item">
                <Link href="#!">
                  <a
                    className="nav-link active"
                    to="#tab-1"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-1"
                    role="tab"
                    aria-selected="false"
                  >
                    Kampanyalar
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#!">
                  <a
                    className="nav-link"
                    to="#tab-2"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-2"
                    role="tab"
                    aria-selected="false"
                  >
                    Duyurular
                  </a>
                </Link>
              </li>
            </ul>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade pt-60 active show"
                id="tab-1"
                role="tabpanel"
              >
                <CampaignGallery />
              </div>
              <div className="tab-pane fade pt-60" id="tab-2" role="tabpanel">
                {/* <MediaGalleryVideo /> */}
                <p className='d-flex justify-content-center'>Şu anda duyuru bulunmamaktadır.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsTab;
