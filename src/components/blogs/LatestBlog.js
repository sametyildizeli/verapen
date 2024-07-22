/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import SectionTitle from '../common/SectionTitle';
import { blogFeatureData } from '../../utils/data';

const LatestBlog = () => {
  return (
    <section className="related-blog-list ptb-120 bg-light">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-12">
            <SectionTitle
              subtitle="Haberler"
              title="Haberlerimize Göz Atabilirsiniz"
            />
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="text-start text-lg-end mb-4 mb-lg-0 mb-xl-0">
              <Link href="/news">
                <a className="btn btn-primary"> Tüm Haberler</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {blogFeatureData.slice(0, 3).map((blog, i) => (
            <div key={i + 1} className="col-lg-4 col-md-6">
              <div className="single-article rounded-custom mb-4 mb-lg-0">
                <Link href="/news-detail">
                  <a className="article-img">
                    <Image
                      width={414}
                      height={224}
                      src="/news-1.jpeg"
                      alt="article"
                    />
                  </a>
                </Link>
                <div className="article-content p-4">
                  {/* <div className="article-category mb-4 d-block">
                    <a
                      href="#!"
                      className={`d-inline-block text-dark badge ${blog.class}`}
                    >
                      {blog.type}
                    </a>
                  </div> */}
                  <Link href="/news-detail">
                    <a>
                      <h2 className="h5 article-title limit-2-line-text">
                        {blog.header}
                      </h2>
                    </a>
                  </Link>
                  <p className="limit-2-line-text">{blog.info}</p>

                  {/* <a href="#!">
                    <div className="d-flex align-items-center pt-4">
                      <div className="avatar-info">
                        <span className="small fw-medium text-muted">
                          {blog.data}
                        </span>
                      </div>
                    </div>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
