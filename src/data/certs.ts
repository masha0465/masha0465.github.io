export type Cert = { name: string; issuer: string; date: string; highlight?: boolean };

export const certs: Cert[] = [
  { name: "ISTQB Advanced Level — Test Manager", issuer: "KSTQB", date: "2025.11", highlight: true },
  { name: "NCP Professional", issuer: "Naver Cloud Platform", date: "2025.06", highlight: true },
  { name: "ISTQB Foundation Level", issuer: "KSTQB", date: "2012.11" },
  { name: "정보처리기사", issuer: "한국산업인력공단", date: "2011.09" },
];

export const education = {
  school: "동덕여자대학교",
  major: "컴퓨터공학 전공 (주전공) · 국제경영 전공 (복수전공)",
  period: "2005.03 ~ 2012.02",
};
