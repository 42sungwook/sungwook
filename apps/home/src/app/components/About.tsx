import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              안녕하세요 저는 프론트엔드 개발자로 성장하고 있는 김성욱입니다.
              주로 React와 Next.js를 사용해서 프로젝트를 진행해왔으며 진행한
              프로젝트들은 아래에서 확인하실 수 있습니다.
            </p>
            <p>
              개발을 C와 C++ 언어로 시작하여 쉘, 웹 서버를 만들어보는 등 여러
              과제를 수행하며 소프트웨어 개발에 대한 기본적인 이해를 가지고
              있습니다. 개발을 할 때 가독성 높은 코드를 짜기 위해 아키텍쳐와
              구조에 대한 고민을 많이 하고 있으며 ai가 발전함에 따라 생산성을
              높힐 수 있는 방법에 대해 많은 관심을 갖고 있습니다.
            </p>
          </div>

          <div className={styles.aboutDetails}>
            <div className={styles.detailSection}>
              <h3 className={styles.detailTitle}>🎓 교육</h3>
              <div className={styles.detailItems}>
                <div className={styles.detailItem}>
                  <div className={styles.detailPeriod}>2022.11 - 2024.08</div>
                  <div className={styles.detailContent}>
                    <strong>42서울</strong>
                    <span className={styles.detailStatus}>[공통과정 수료]</span>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailPeriod}>2015.03 - 2022.02</div>
                  <div className={styles.detailContent}>
                    <strong>한양대학교 화학공학과</strong>
                    <span className={styles.detailStatus}>[졸업]</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.detailSection}>
              <h3 className={styles.detailTitle}>💼 경력</h3>
              <div className={styles.detailItems}>
                <div className={styles.detailItem}>
                  <div className={styles.detailPeriod}>2024.11 - 2025.05</div>
                  <div className={styles.detailContent}>
                    <strong>(주)엘리스그룹</strong>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailPeriod}>2024.05 - 2024.08</div>
                  <div className={styles.detailContent}>
                    <strong>(주)핏펀즈</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.detailSection}>
              <h3 className={styles.detailTitle}>🏆 수상 및 자격증</h3>
              <div className={styles.detailItems}>
                <div className={styles.detailItem}>
                  <div className={styles.detailPeriod}>2024.09</div>
                  <div className={styles.detailContent}>
                    <strong>PCCP Javascript Lv3.</strong>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailPeriod}>2024.08</div>
                  <div className={styles.detailContent}>
                    <strong>Opic 영어 IH 등급</strong>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailPeriod}>2023.10</div>
                  <div className={styles.detailContent}>
                    <strong>
                      42서울 경진대회 대상(과학기술정보통신부 장관상)
                    </strong>
                  </div>
                  <div className={styles.detailDescription}>
                    활동 내용: 42STAT 프로젝트
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailPeriod}>2014.02</div>
                  <div className={styles.detailContent}>
                    <strong>
                      2013 STEAM R&E 페스티벌 최우수상(교육부 장관상)
                    </strong>
                  </div>
                  <div className={styles.detailDescription}>
                    활동 내용: 파력 발전기 프로토타입 개발
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.aboutHighlights}>
            <div className={styles.highlightItem}>
              <h3>🎯 자기 주도적</h3>
              <p>
                스스로 학습 목표를 설정하고 체계적으로 실행해나갑니다. 복잡한
                문제일수록 작은 단위로 나누어 차근차근 해결하는 것을 선호합니다.
              </p>
            </div>
            <div className={styles.highlightItem}>
              <h3>🤝 협업 중시</h3>
              <p>
                동료 학습으로 개발을 시작한 만큼 소통과 협업을 중시하며, 함께할
                때 더 큰 시너지를 만들어낸다고 믿습니다.
              </p>
            </div>
            <div className={styles.highlightItem}>
              <h3>📈 트렌드 학습</h3>
              <p>
                최신 기술 동향을 꾸준히 탐구하며, 새로운 기술을 프로젝트에
                적용해보는 것을 즐깁니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
