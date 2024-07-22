/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { blogFeatureData } from '../../utils/data';

const BlogFeature = () => {
  return (
    <section className="masonary-blog-section ptb-120">
      <div className="container">
        <div className="row">
          {blogFeatureData.map((blog, i) => (
            <div key={i + 1} className="col-lg-4 col-md-6">
              <div className="single-article rounded-custom my-3">
                <Link href="/news-detail">
                  <a className="article-img">
                    <Image
                      width={414}
                      height={224}
                      src={blog.image}
                      alt="article"
                    />
                  </a>
                </Link>
                <div className="article-content p-4">
                  <Link href="/news-detail">
                    <a>
                      <h2 className="h5 article-title limit-2-line-text">
                        {blog.header}
                      </h2>
                    </a>
                  </Link>
                  <p className="limit-2-line-text">{blog.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="row justify-content-center align-items-center mt-5">
          <div className="col-auto my-1">
            <a href="#!" className="btn btn-soft-primary btn-sm">
              Previous
            </a>
          </div>
          <div className="col-auto my-1">
            <nav>
              <ul className="pagination rounded mb-0">
                <li className="page-item">
                  <a className="page-link" href="#!">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#!">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#!">
                    3
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-auto my-1">
            <a href="#!" className="btn btn-soft-primary btn-sm">
              Next
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default BlogFeature;
