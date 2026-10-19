import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  alternates: { canonical: "/privacy" },
};

const H2 = "mt-12 mb-3 text-[21px] font-semibold";
const TABLE = "w-full border-collapse text-left text-[15px] [&_td]:border-t [&_td]:border-hairline [&_td]:py-3 [&_td]:pr-4 [&_td]:align-top [&_th]:pb-2 [&_th]:pr-4 [&_th]:font-normal [&_th]:text-fg-muted";

export default function Privacy() {
  return (
    <main data-page="privacy" lang="ko" className="mx-auto max-w-[760px] select-text break-keep px-6 py-16 text-[16px] leading-relaxed sm:px-12">
      <Link href="/" className="text-[15px] text-link hover:underline">
        <span aria-hidden="true">‹</span> mongsil.dev
      </Link>
      <h1 className="mt-6 text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-[-0.015em]">개인정보 처리방침</h1>
      <p className="mt-2 text-[15px] text-fg-muted">2026년 10월 20일 시행</p>
      <p className="mt-6">
        mongsil.dev가 처리하는 개인정보를 개인정보 보호법 제30조에 따라 공개합니다.
        <br />
        개인이 운영하는 소개 페이지이며, 로그인이나 입력 양식이 없습니다.
      </p>

      <h2 className={H2}>1. 처리 목적</h2>
      <ul className="list-disc pl-5">
        <li>오류 확인과 남용 방지</li>
        <li>방문 통계</li>
      </ul>

      <h2 className={H2}>2. 처리 항목과 보유 기간</h2>
      <div className="overflow-x-auto">
        <table className={TABLE}>
          <thead>
            <tr>
              <th scope="col">항목</th>
              <th scope="col">수집 시점</th>
              <th scope="col">보유 기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>방문한 페이지 주소, 브라우저와 기기 정보, 방문 통계 쿠키 식별자</td>
              <td>페이지를 조작하거나 10초 넘게 볼 때</td>
              <td>수집일로부터 14개월</td>
            </tr>
            <tr>
              <td>서버 접속 기록: 접속 IP 주소, 요청한 주소, 브라우저 정보</td>
              <td>사이트에 접속할 때</td>
              <td>기록이 100MB를 넘으면 오래된 것부터 지움</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className={H2}>3. 파기</h2>
      <p>
        보유 기간이 지난 정보는 자동으로 지웁니다.
        <br />
        지운 정보는 되살릴 수 없습니다.
      </p>

      <h2 className={H2}>4. 제3자 제공</h2>
      <p>개인정보를 다른 곳에 넘기거나 팔지 않습니다.</p>

      <h2 className={H2}>5. 처리 위탁과 국외 이전</h2>
      <div className="overflow-x-auto">
        <table className={TABLE}>
          <thead>
            <tr>
              <th scope="col">받는 곳</th>
              <th scope="col" className="whitespace-nowrap">국가</th>
              <th scope="col">업무와 항목</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Cloudflare
                <br />
                <span className="whitespace-nowrap">dpo@cloudflare.com</span>
              </td>
              <td className="whitespace-nowrap">미국</td>
              <td>
                사이트 접속 중계와 방문 통계.
                <br />
                접속 IP 주소, 요청 정보, 방문한 페이지 주소, 브라우저 종류가 접속할 때마다 전송됨.
                <br />
                방문 통계는 쿠키를 쓰지 않음.
                <br />
                보유 기간은 Cloudflare 정책을 따름
              </td>
            </tr>
            <tr>
              <td>
                Google LLC
                <br />
                <span className="whitespace-nowrap">googlekrsupport@google.com</span>
              </td>
              <td className="whitespace-nowrap">미국</td>
              <td>
                Google 애널리틱스 방문 통계 분석.
                <br />
                쿠키 식별자, 방문한 페이지 주소, 브라우저와 기기 정보, 접속 IP 주소가 페이지를 조작하거나 10초 넘게 볼 때 전송됨.
                <br />
                보유 기간은 수집일로부터 14개월
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4">
        위 국외 이전은 서비스 제공에 필요한 처리 위탁이며, 개인정보 보호법 제28조의8 제1항 제3호에 따릅니다.
        <br />
        Cloudflare를 거치지 않고는 사이트에 접속할 수 없으며, Google 애널리틱스 수집만 거부하는 방법은 6번 항목에 있습니다.
      </p>

      <h2 className={H2}>6. 쿠키</h2>
      <ul className="list-disc pl-5">
        <li>_ga, _ga_P0QQSS1SE5: Google 애널리틱스 방문자 구분, 최대 2년</li>
      </ul>
      <p className="mt-4">
        광고 쿠키는 쓰지 않습니다.
        <br />
        브라우저 설정에서 쿠키를 막아도 사이트는 그대로 볼 수 있습니다.
        <br />
        Google 애널리틱스의 수집만 거부하려면{" "}
        <a className="text-link hover:underline" href="https://tools.google.com/dlpage/gaoptout">
          Google 애널리틱스 차단 브라우저 부가기능
        </a>
        을 설치하면 됩니다.
      </p>

      <h2 className={H2}>7. 안전 조치</h2>
      <ul className="list-disc pl-5">
        <li>운영자만 접근할 수 있는 서버에 저장</li>
        <li>HTTPS 접속만 허용</li>
      </ul>

      <h2 className={H2}>8. 정보주체의 권리</h2>
      <p>
        언제든지 자신의 개인정보 열람, 정정, 삭제, 처리 정지를 요구할 수 있습니다.
        <br />
        아래 이메일로 보내 주시면 본인 확인 뒤 바로 처리합니다.
        <br />
        만 14세 미만 아동의 권리는 법정대리인이 행사할 수 있습니다.
      </p>

      <h2 className={H2}>9. 개인정보 보호책임자</h2>
      <p>
        몽실, mongsil.dev 운영자
        <br />
        <a className="text-link hover:underline" href="mailto:mail@mongsil.dev">
          mail@mongsil.dev
        </a>
      </p>

      <h2 className={H2}>10. 권리 침해 상담</h2>
      <ul className="list-disc pl-5">
        <li>개인정보분쟁조정위원회: 1833-6972, www.kopico.go.kr</li>
        <li>개인정보침해신고센터: 118, privacy.kisa.or.kr</li>
        <li>대검찰청: 1301, www.spo.go.kr</li>
        <li>경찰청: 182, ecrm.police.go.kr</li>
      </ul>

      <h2 className={H2}>11. 변경</h2>
      <p>처리방침이 바뀌면 이 페이지에 시행일과 함께 올립니다.</p>
    </main>
  );
}
