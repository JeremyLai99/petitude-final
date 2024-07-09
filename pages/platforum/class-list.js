import React from 'react'
import Layout from '@/components/layout/layout'
import styles from '../../styles/platforum/platforum-style.module.css'
import SideBarPc from '@/components/layout/side-bar-pc'
import SideBarMobile from '@/components/layout/side-bar-mobile'
// import Link from 'next/link'

export default function ClassList() {
  return (
    <>
      <section className={`${styles.BgImg}`}>
        <Layout title="貓狗論壇" pageName="pet-insurance">
          <div className="container mb-5">
            <div className="row">
              <SideBarPc></SideBarPc>
              {/* section 這裡開始 */}
              <div className="col-xl-9 col-lg-12">
                {/* class-block 這裡開始 */}
                <div
                  className={`container card my-3 ${styles.Rounded5} border-0 h-100`}
                >
                  <SideBarMobile></SideBarMobile>

                  <div className="row">
                    <div className="col-lg-12 col-md-12 d-flex flex-column align-items-center justify-content-center mt-3 mb-5">
                      <div className="border-bottom w-75">
                        <a
                          href="./article-list.html"
                          className={`${styles.AReset} mx-5 mt-4 d-flex ${styles.Hover}`}
                          data-img="p01"
                        >
                          <h3 className="flex-grow-1">寵物遺失</h3>
                          <p
                            className={`d-flex align-items-end ${styles.LightGray} d-sm-none d-md-block d-none d-sm-block`}
                          >
                            6篇文章
                          </p>
                        </a>
                      </div>
                      <div className="border-bottom w-75">
                        <a
                          className={`${styles.AReset} mx-5 mt-4 d-flex ${styles.Hover}`}
                          href="#"
                          data-img="p01"
                        >
                          <h3 className="flex-grow-1">飼養心得</h3>
                          <p
                            className={`d-flex align-items-end ${styles.LightGray} d-sm-none d-md-block d-none d-sm-block`}
                          >
                            6篇文章
                          </p>
                        </a>
                      </div>
                      <div className="border-bottom w-75">
                        <a
                          className={`${styles.AReset} mx-5 mt-4 d-flex ${styles.Hover}`}
                          href="#"
                          data-img="p01"
                        >
                          <h3 className="flex-grow-1">聊天討論</h3>
                          <p
                            className={`d-flex align-items-end ${styles.LightGray} d-sm-none d-md-block d-none d-sm-block`}
                          >
                            6篇文章
                          </p>
                        </a>
                      </div>
                      <div className="border-bottom w-75">
                        <a
                          className={`${styles.AReset} mx-5 mt-4 d-flex ${styles.Hover}`}
                          href="#"
                          data-img="p01"
                        >
                          <h3 className="flex-grow-1">寵物健康醫療</h3>
                          <p
                            className={`d-flex align-items-end ${styles.LightGray} d-sm-none d-md-block d-none d-sm-block`}
                          >
                            6篇文章
                          </p>
                        </a>
                      </div>
                      <div className="border-bottom w-75">
                        <a
                          className={`${styles.AReset} mx-5 mt-4 d-flex ${styles.Hover}`}
                          href="#"
                          data-img="p01"
                        >
                          <h3 className="flex-grow-1">寵物營養</h3>
                          <p
                            className={`d-flex align-items-end ${styles.LightGray} d-sm-none d-md-block d-none d-sm-block`}
                          >
                            6篇文章
                          </p>
                        </a>
                      </div>
                      <div className="border-bottom w-75">
                        <a
                          className={`${styles.AReset} mx-5 mt-4 d-flex ${styles.Hover}`}
                          href="#"
                          data-img="p01"
                        >
                          <h3 className="flex-grow-1">寵物訓練</h3>
                          <p
                            className={`d-flex align-items-end ${styles.LightGray} d-sm-none d-md-block d-none d-sm-block`}
                          >
                            6篇文章
                          </p>
                        </a>
                      </div>
                      <div className="border-bottom w-75">
                        <a
                          className={`${styles.AReset} mx-5 mt-4 d-flex ${styles.Hover}`}
                          href="#"
                          data-img="p01"
                        >
                          <h3 className="flex-grow-1">寵物相關新聞</h3>
                          <p
                            className={`d-flex align-items-end ${styles.LightGray} d-sm-none d-md-block d-none d-sm-block`}
                          >
                            6篇文章
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* class-block 這裡結束 */}
              </div>
              {/* section 這裡結束 */}
            </div>
          </div>
        </Layout>
      </section>
    </>
  )
}
