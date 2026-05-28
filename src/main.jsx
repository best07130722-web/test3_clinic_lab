import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BookOpen,
  Building2,
  CalendarDays,
  CheckCircle2,
 ChevronLeft,
  FileText,
  UserRound,
  Headphones,
  Menu
} from 'lucide-react';

import './style.css';
const categories = ['すべて', '承継・売却', 'M&A基礎知識', 'セミナーレポート'];
const departments = ['内科', '小児科', '皮膚科', '整形外科', '眼科', '耳鼻咽喉科', '婦人科', '精神科・心療内科', '歯科', 'その他'];
const areas = ['北海道・東北', '関東', '中部', '関西', '中国・四国', '九州・沖縄'];

const articles = [
  { id: 'succession-1', cat: '承継・売却', date: '2026.05.01', title: 'クリニック承継を考え始めた医師が最初に整理すべきこと', desc: '売却価格だけでなく、患者・スタッフ・地域医療への影響を踏まえて準備する視点を解説します。' },
  { id: 'succession-2', cat: '承継・売却', date: '2026.05.08', title: '個人開業と医療法人で異なる譲渡方式の考え方', desc: '事業譲渡、持分譲渡、MS法人の扱いなど、初期相談前に知っておきたい論点を整理します。' },
  { id: 'ma-1', cat: 'M&A基礎知識', date: '2026.05.12', title: 'クリニックM&Aの価格はどのように決まるのか', desc: 'EBITDA、譲渡資産、立地、診療科、院長依存度などの評価ポイントをわかりやすく紹介します。' },
  { id: 'ma-2', cat: 'M&A基礎知識', date: '2026.05.16', title: 'DDで確認される財務・法務・労務・医療リスク', desc: 'デューデリジェンスで買い手が確認する主要項目と、事前準備の進め方を説明します。' },
  { id: 'seminar-1', cat: 'セミナーレポート', date: '2026.05.20', title: '開業医向けセミナー開催レポート', desc: '承継・売却・開業準備に関する参加者の関心テーマと相談傾向をまとめました。' },
  { id: 'seminar-2', cat: 'セミナーレポート', date: '2026.05.24', title: '医師のキャリアとクリニック経営の変化', desc: '医療業界の環境変化を踏まえ、今後必要となる経営・集患・承継の視点を整理します。' }
];

const seminars = [
  { title: '失敗しないクリニック承継・売却セミナー', date: '2026年7月1日（水）19:00〜20:00', capacity: '30名', price: '無料', place: 'Google Meet' },
  { title: '開業前に知るべき診療圏分析と集患設計', date: '2026年7月8日（水）19:00〜20:00', capacity: '30名', price: '無料', place: 'Google Meet' }
];

function Header({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const tabs = [
    { id: 'home', label: 'TOP' },
    { id: 'simulator', label: 'シミュレーター' },
    { id: 'columns', label: 'コラム' },
    { id: 'seminars', label: 'セミナー' },
    { id: 'consult', label: '無料相談' },
  ];

  return (
    <header className="header">
      <button className="brand" onClick={() => setPage('home')}>
        <span>クリニック開業ラボ</span>
        <small>Clinic Succession Lab</small>
      </button>
      <nav className="nav">
  {tabs.map((item) => (
    <button
      key={item.id}
      className={page === item.id ? 'active' : ''}
      onClick={() => setPage(item.id)}
    >
      {item.label}
    </button>
  ))}
</nav>

      <button className="menuBtn" onClick={() => setOpen(!open)}>
        {open ? 'X' : <Menu size={22} />}
      </button>

      {open && (
        <div className="mobileNav">
          {tabs.map((item) => (
            <button
              key={item.id}
              className={page === item.id ? 'active' : ''}
              onClick={() => {
                setPage(item.id);
                setOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
function Home({ setPage }) {
  return (
    <main className="mobileTopPage">
      <section className="mobileHero">
        <div className="mobileHeroCopy">
          <h1>
            クリニックの承継・<br />
            売却・開業を、<br />
            もっと相談しやすく。
          </h1>

          <p>
            匿名で使える簡易シミュレーターと、医師向けの
            コラム・セミナーで、情報収集から無料相談までを
            シームレスにつなぎます。
          </p>

          <div className="mobileHeroButtons">
            <button className="mobilePrimaryBtn" onClick={() => setPage("simulator")}>
              売却価格を試算する <span>→</span>
            </button>

            <button className="mobileSecondaryBtn" onClick={() => setPage("seminars")}>
              セミナーを見る
            </button>
          </div>
        </div>

        <div className="mobileFeatureCard">
          <div>
            <UserRound className="mobileFeatureIcon" />
            <h3>匿名で利用可</h3>
            <p>安心して試算</p>
          </div>
          <div>
            <Headphones className="mobileFeatureIcon" />
            <h3>無料相談対応</h3>
            <p>専門家に相談可</p>
          </div>
          <div>
            <FileText className="mobileFeatureIcon" />
            <h3>コラム掲載中</h3>
            <p>最新情報を発信</p>
          </div>
          <div>
            <CalendarDays className="mobileFeatureIcon" />
            <h3>セミナー開催中</h3>
            <p>オンライン参加可</p>
          </div>
        </div>

        <div className="mobileRecommend">
          <h2>こんな方におすすめ</h2>

          <div className="mobileRecommendItem">
            <span>✓</span>
            <div>
              <h3>クリニックの売却を検討している方</h3>
              <p>相場や価格を把握し、最適な売却を進めたい方</p>
            </div>
          </div>

          <div className="mobileRecommendItem">
            <span>✓</span>
            <div>
              <h3>親族や第三者への承継を考えている方</h3>
              <p>承継の進め方や注意点を知りたい方</p>
            </div>
          </div>

          <div className="mobileRecommendItem">
            <span>✓</span>
            <div>
              <h3>新規開業や分院展開を考えている方</h3>
              <p>開業エリアや資金計画などの情報を集めたい方</p>
            </div>
          </div>
        </div>

        <button className="mobileBottomCta" onClick={() => setPage("consult")}>
          <span className="mobileChatIcon">→</span>
          <strong>まずは無料で相談してみる</strong>
          <span>→</span>
        </button>
      </section>
    </main>
  );
}
function Feature({ icon, title, text, onClick }) { return <button className="feature" onClick={onClick}>{icon}<h3>{title}</h3><p>{text}</p><span>詳しく見る →</span></button>; }

function Simulator({ setPage }) {
  const [clinicType, setClinicType] = useState('個人開業');
  const [transfer, setTransfer] = useState('事業譲渡');
  const [dept, setDept] = useState('内科');
  const [area, setArea] = useState('関東');
  const [sales, setSales] = useState(12000);
  const [cash, setCash] = useState(1500);
  const [equipment, setEquipment] = useState(800);
  const multiple = dept === '内科' ? 0.42 : dept === '歯科' ? 0.32 : 0.38;
  const goodwill = Math.round(sales * multiple);
  const assets = Number(cash) + Number(equipment);
  const low = Math.round((goodwill + assets) * 0.85);
  const high = Math.round((goodwill + assets) * 1.15);
  const taxRate = transfer === '事業譲渡' ? 0.30 : 0.20;
  const net = Math.round(((low + high) / 2) * (1 - taxRate));
  return <main className="section narrow">
    <Back setPage={setPage}/><h1>売却価格シミュレーター</h1><p className="lead small">匿名で概算の売却価格レンジを確認できます。実際の価格は財務・法務・労務・医療リスクの確認後に変動します。</p>
    <div className="simulatorGrid">
      <section className="panel formPanel">
        <Field label="クリニック形態"><Toggle options={['個人開業','医療法人','MS法人あり']} value={clinicType} setValue={setClinicType}/>{clinicType === 'MS法人あり' && <p className="note">MS法人がある場合、資産・契約・税務の整理が必要です。</p>}</Field>
        <Field label="譲渡方式"><Toggle options={['事業譲渡','持分譲渡']} value={transfer} setValue={setTransfer}/></Field>
        <div className="twoCols"><Field label="診療科"><select value={dept} onChange={e=>setDept(e.target.value)}>{departments.map(d=><option key={d}>{d}</option>)}</select></Field><Field label="エリア"><select value={area} onChange={e=>setArea(e.target.value)}>{areas.map(a=><option key={a}>{a}</option>)}</select></Field></div>
        <Field label={`年間売上：${sales.toLocaleString()}万円`}><input type="range" min="1000" max="50000" step="500" value={sales} onChange={e=>setSales(Number(e.target.value))}/></Field>
        <div className="twoCols"><Field label="現預金（万円）"><input type="number" value={cash} onChange={e=>setCash(e.target.value)}/></Field><Field label="医療機器（万円）"><input type="number" value={equipment} onChange={e=>setEquipment(e.target.value)}/></Field></div>
      </section>
      <section className="panel resultPanel"><h2>概算結果</h2><Result label="営業権価格" value={`${goodwill.toLocaleString()}万円`}/><Result label="譲渡資産" value={`${assets.toLocaleString()}万円`}/><div className="range"><span>概算売却価格レンジ</span><strong>{low.toLocaleString()}万〜{high.toLocaleString()}万円</strong></div><Result label="想定税率" value={`${Math.round(taxRate*100)}%`}/><Result label="手取り概算" value={`${net.toLocaleString()}万円`}/><button className="primary full" onClick={()=>setPage('consult')}>無料相談を申し込む</button></section>
    </div>
  </main>;
}
function Field({label, children}) { return <label className="field"><span>{label}</span>{children}</label>; }
function Toggle({ options, value, setValue }) { return <div className="toggle">{options.map(o=><button key={o} className={value===o?'selected':''} onClick={()=>setValue(o)}>{o}</button>)}</div>; }
function Result({label, value}) { return <div className="result"><span>{label}</span><strong>{value}</strong></div>; }
function Back({ setPage }) { return <button className="back" onClick={()=>setPage('home')}><ChevronLeft size={18}/> 戻る</button>; }

function Columns({ setPage }) {
  const [cat, setCat] = useState('すべて');
  const filtered = cat === 'すべて' ? articles : articles.filter(a=>a.cat===cat);
  return <main className="section"><h1>コラム</h1><p className="lead small">クリニック承継・売却・開業に関する情報をカテゴリ別に確認できます。</p><div className="tabs">{categories.map(c=><button key={c} className={cat===c?'active':''} onClick={()=>setCat(c)}>{c}</button>)}</div><ArticleGrid articles={filtered} setPage={setPage}/></main>;
}
function ArticleGrid({articles, setPage}) { return <div className="cards articleGrid">{articles.map(a=><article className="article" key={a.id}><span className="badge">{a.cat}</span><small>{a.date}</small><h3>{a.title}</h3><p>{a.desc}</p><button onClick={()=>setPage(`article:${a.id}`)}>続きを読む</button></article>)}</div>; }
function ArticleDetail({ id, setPage }) { const a = articles.find(x=>x.id===id) || articles[0]; return <main className="section narrow"><Back setPage={setPage}/><span className="badge">{a.cat}</span><h1>{a.title}</h1><p className="date">{a.date}</p><div className="articleBody"><p>{a.desc}</p><h2>まず整理すべき視点</h2><p>クリニックM&Aでは、価格だけでなく、患者構成、紹介患者比率、保険診療比率、院長依存度、スタッフ体制、地域特性を総合的に確認する必要があります。</p><h2>相談前に準備するとよい情報</h2><p>直近3期の売上、利益、レセプト件数、スタッフ人数、賃貸借契約、医療機器一覧、主要な紹介元、今後の希望条件を整理しておくと、初回相談がスムーズになります。</p></div><button className="primary" onClick={()=>setPage('consult')}>無料相談を申し込む</button></main>; }

function Seminars({ setPage }) { return <main className="section"><h1>セミナー</h1><p className="lead small">医師向けオンラインセミナーを開催しています。参加費は無料です。</p><div className="cards two">{seminars.map((s,i)=><article className="seminar" key={s.title}><CalendarDays/><h3>{s.title}</h3><p>{s.date}</p><ul><li>{s.place}</li><li>参加費：{s.price}</li><li>定員：{s.capacity}</li></ul><button className="primary full" onClick={()=>setPage(`seminarForm:${i}`)}>申し込む</button></article>)}</div></main>; }

function FormPage({ type, setPage }) {
  const isSeminar = type.startsWith('seminarForm');
  const idx = Number(type.split(':')[1] || 0);
  const seminar = seminars[idx];
  const [sent, setSent] = useState(false);
  const [agree, setAgree] = useState(false);
  const [form, setForm] = useState({name:'', email:'', tel:'', dept:'内科', status:'情報収集中', message:'', area:'関東'});
  const valid = form.name && /.+@.+\..+/.test(form.email) && (!isSeminar || agree);
  if (sent) return <main className="section narrow"><div className="complete"><CheckCircle2 size={54}/><h1>{isSeminar?'セミナー申込を受け付けました':'無料相談を受け付けました'}</h1><p>入力内容を確認のうえ、担当者よりご連絡いたします。</p><button className="primary" onClick={()=>setPage('home')}>TOPへ戻る</button></div></main>;
  return <main className="section narrow"><Back setPage={setPage}/><h1>{isSeminar?'セミナー申込':'無料相談'}</h1><p className="lead small">必要事項を入力してください。メールアドレスは形式チェックを行います。</p>{isSeminar && <div className="panel seminarInfo"><h3>{seminar.title}</h3><p>{seminar.date} / {seminar.place} / 参加費：{seminar.price}</p></div>}<section className="panel formPanel"><Field label="お名前（必須）"><input placeholder="山田 太郎" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></Field><Field label="メールアドレス（必須）"><input placeholder="example@example.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></Field><Field label="電話番号"><input placeholder="090-0000-0000" value={form.tel} onChange={e=>setForm({...form,tel:e.target.value})}/></Field><div className="twoCols"><Field label="診療科"><select value={form.dept} onChange={e=>setForm({...form,dept:e.target.value})}>{departments.map(d=><option key={d}>{d}</option>)}</select></Field><Field label={isSeminar?'開業希望エリア':'エリア'}><select value={form.area} onChange={e=>setForm({...form,area:e.target.value})}>{areas.map(a=><option key={a}>{a}</option>)}</select></Field></div><Field label={isSeminar?'開業状況':'検討状況'}><Toggle options={['情報収集中','6ヶ月以内','1年以内','具体的に相談したい']} value={form.status} setValue={v=>setForm({...form,status:v})}/></Field><Field label="相談内容"><textarea rows="5" placeholder="ご相談内容を入力してください" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/></Field>{isSeminar && <label className="check"><input type="checkbox" checked={agree} onChange={e=>setAgree(e.target.checked)}/> 個人情報の取り扱いに同意する</label>}<button className="primary full" disabled={!valid} onClick={()=>setSent(true)}>{isSeminar?'申込を確定する':'相談内容を送信する'}</button>{!valid && <p className="error">必須項目を入力してください。</p>}</section></main>;
}

function Privacy({ setPage }) { return <main className="section narrow"><Back setPage={setPage}/><ShieldCheck size={42}/><h1>プライバシーポリシー</h1><p>本サービスでは、無料相談・セミナー申込に必要な範囲で個人情報を取得します。取得した情報は、問い合わせ対応、セミナー運営、サービス改善、法令遵守の目的で利用します。</p><h2>取得する情報</h2><p>氏名、メールアドレス、電話番号、診療科、相談内容、申込内容など。</p><h2>第三者提供</h2><p>法令に基づく場合を除き、本人の同意なく第三者へ提供しません。</p></main>; }

function FixedCTA({ setPage }) { return <div className="fixedCta"><button onClick={()=>setPage('simulator')}>試算する</button><button onClick={()=>setPage('consult')}>無料相談</button></div>; }

function App() {
  const [page, setPage] = useState('home');
  const content = useMemo(()=>{
    if (page === 'home') return <Home setPage={setPage}/>;
    if (page === 'simulator') return <Simulator setPage={setPage}/>;
    if (page === 'columns') return <Columns setPage={setPage}/>;
    if (page.startsWith('article:')) return <ArticleDetail id={page.split(':')[1]} setPage={setPage}/>;
    if (page === 'seminars') return <Seminars setPage={setPage}/>;
    if (page === 'consult' || page.startsWith('seminarForm')) return <FormPage type={page} setPage={setPage}/>;
    if (page === 'privacy') return <Privacy setPage={setPage}/>;
    return <Home setPage={setPage}/>;
  }, [page]);
  return <><Header page={page} setPage={setPage}/>{content}<footer className="footer"><button onClick={()=>setPage('privacy')}>プライバシーポリシー</button><span>© 2026 開業ラボ</span></footer><FixedCTA setPage={setPage}/></>;
}

createRoot(document.getElementById('root')).render(<App />);
