import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const services = [
  {n:'01', title:'جوان‌سازی پوست', text:'طراحی برنامه اختصاصی برای شفافیت، قوام و بازگشت طراوت طبیعی پوست.'},
  {n:'02', title:'تزریق ژل و فیلر', text:'اصلاح فرم و حجم با رویکرد طبیعی، متناسب با آناتومی و چهره‌ی شما.'},
  {n:'03', title:'لیزر موهای زائد', text:'تجربه‌ای سریع، دقیق و راحت با تمرکز بر ایمنی و کیفیت نتیجه.'},
  {n:'04', title:'مراقبت و درمان مو', text:'ارزیابی تخصصی پوست سر و مسیر درمانی متناسب با شرایط هر فرد.'},
  {n:'05', title:'فرم‌دهی و زیبایی', text:'راهکارهای غیرجراحی برای هماهنگی بیشتر اجزای صورت و حفظ هویت چهره.'},
  {n:'06', title:'درمان جای جوش و لک', text:'ترکیب روش‌های تخصصی برای بهبود بافت، لک و ناهمواری‌های پوستی.'},
]

const faq = [
  ['برای مشاوره اولیه باید وقت بگیرم؟','بله؛ برای اینکه زمان کافی برای بررسی پوست و انتخاب روش مناسب داشته باشید، رزرو وقت پیشنهاد می‌شود. این وب‌سایت صرفاً نسخه نمایشی است و فرم‌ها به بک‌اند متصل نیستند.'],
  ['چطور بهترین خدمت را برای پوستم انتخاب کنم؟','انتخاب درمان به سن، جنس پوست، سابقه درمان و هدف شما بستگی دارد. بهترین مسیر بعد از ارزیابی حضوری توسط پزشک مشخص می‌شود.'],
  ['نتیجه درمان‌های زیبایی طبیعی خواهد بود؟','رویکرد طراحی این دمو روی نتیجه طبیعی و حفظ هویت چهره تأکید دارد. تصمیم درمانی واقعی باید توسط پزشک و پس از معاینه انجام شود.'],
  ['آیا امکان مشاهده مسیر روی نقشه وجود دارد؟','بله؛ در بخش تماس می‌توانید موقعیت کلینیک را روی نقشه مشاهده کنید و برای مسیریابی وارد Google Maps شوید.'],
]

function Logo(){
  return <a className="brand" href="#top" aria-label="ماه زر">
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="28"/><path d="M23 48c3-9 2-19 5-29M41 48c-3-9-2-19-5-29M28 19c2 8 6 10 8 0"/></svg>
    </span>
    <span><b>ماه زر</b><small>کلینیک پوست، مو و زیبایی</small></span>
  </a>
}

function IconArrow(){return <span className="arrow">↙</span>}

function App(){
  const [menu,setMenu]=useState(false)
  const [openFaq,setOpenFaq]=useState(0)
  const [sent,setSent]=useState(false)

  useEffect(()=>{
    const onScroll=()=> document.body.classList.toggle('scrolled', window.scrollY>30)
    onScroll(); window.addEventListener('scroll',onScroll)
    return ()=>window.removeEventListener('scroll',onScroll)
  },[])

  const submit = (e)=>{e.preventDefault(); setSent(true)}

  return <main id="top">
    <header className="site-header">
      <div className="nav-shell">
        <Logo/>
        <nav className={menu?'nav open':'nav'}>
          <a href="#services" onClick={()=>setMenu(false)}>خدمات</a>
          <a href="#about" onClick={()=>setMenu(false)}>درباره کلینیک</a>
          <a href="#gallery" onClick={()=>setMenu(false)}>فضای کلینیک</a>
          <a href="#faq" onClick={()=>setMenu(false)}>سؤالات متداول</a>
          <a href="#contact" onClick={()=>setMenu(false)}>تماس</a>
        </nav>
        <a className="btn btn-dark header-cta" href="#reserve">رزرو مشاوره <IconArrow/></a>
        <button className="menu-btn" onClick={()=>setMenu(v=>!v)} aria-label="منو"><i></i><i></i></button>
      </div>
    </header>

    <section className="hero section-pad">
      <div className="hero-copy reveal">
        <div className="eyebrow"><span></span> زیباییِ طبیعی، با نگاه تخصصی</div>
        <h1>زیبایی وقتی<br/>خاص می‌شود که<br/><em>شبیه خودت</em> بماند.</h1>
        <p>در کلینیک ماه زر، تجربه‌ای آرام، مدرن و شخصی‌سازی‌شده برای مراقبت از پوست، مو و زیبایی طراحی شده است.</p>
        <div className="hero-actions">
          <a className="btn btn-gold" href="#reserve">درخواست مشاوره <IconArrow/></a>
          <a className="text-link" href="#services">مشاهده خدمات <span>←</span></a>
        </div>
        <div className="hero-meta">
          <div><b>+6</b><span>دسته خدمات تخصصی</span></div>
          <div><b>تهران</b><span>بلوار دریا</span></div>
          <div><b>VIP</b><span>تجربه مراجعه آرام و خصوصی</span></div>
        </div>
      </div>

      <div className="hero-visual reveal delay-1">
        <div className="hero-photo"><img src="/assets/clinic-lobby.jpg" alt="فضای داخلی کلینیک ماه زر"/></div>
        <div className="hero-card glass">
          <span>MAHZAR</span>
          <b>Skin · Hair · Beauty</b>
          <small>فضای واقعی کلینیک</small>
        </div>
        <div className="orbit"><span>پوست</span><i>•</i><span>مو</span><i>•</i><span>زیبایی</span></div>
      </div>
    </section>

    <section className="ticker" aria-hidden="true">
      <div>MAHZAR CLINIC <i>✦</i> SKIN CARE <i>✦</i> BEAUTY <i>✦</i> HAIR CARE <i>✦</i> NATURAL RESULTS <i>✦</i></div>
    </section>

    <section className="intro section-pad" id="about">
      <div className="intro-label"><span>01</span><p>درباره ماه زر</p></div>
      <div className="intro-main">
        <h2>یک کلینیک زیبایی فقط محل درمان نیست؛<br/>باید جایی باشد که به آن <em>اعتماد</em> می‌کنی.</h2>
        <div className="intro-grid">
          <p>طراحی این تجربه بر پایه‌ی آرامش، شفافیت و انتخاب آگاهانه شکل گرفته؛ از لحظه ورود تا مشاوره، انتخاب روش و مراقبت‌های بعد از درمان.</p>
          <p>هویت بصری ماه زر از فضای واقعی کلینیک الهام گرفته: ذغالی عمیق، طلایی گرم، سفید تمیز و لطافت صورتی بسیار ملایم.</p>
        </div>
      </div>
    </section>

    <section className="services section-pad" id="services">
      <div className="section-head">
        <div><div className="eyebrow"><span></span> خدمات منتخب</div><h2>مراقبتی که برای<br/>شما طراحی می‌شود.</h2></div>
        <p>هر پوست، مو و چهره داستان خودش را دارد. مسیر پیشنهادی باید به همان اندازه شخصی باشد.</p>
      </div>
      <div className="service-grid">
        {services.map((s,i)=><article className="service-card" key={s.title}>
          <div className="service-top"><span>{s.n}</span><button aria-label="بیشتر">↙</button></div>
          <div className={`service-art art-${i+1}`}><span></span></div>
          <h3>{s.title}</h3><p>{s.text}</p>
        </article>)}
      </div>
    </section>

    <section className="statement">
      <div className="statement-photo"><img src="/assets/clinic-reception.jpg" alt="پذیرش کلینیک ماه زر"/></div>
      <div className="statement-copy">
        <span className="big-quote">“</span>
        <h2>کمتر تغییر بده؛<br/>دقیق‌تر <em>زیباتر</em> کن.</h2>
        <p>فلسفه‌ی بصری این نمونه بر زیبایی طبیعی، ظرافت و حس لوکسِ بدون اغراق استوار شده است.</p>
        <a href="#reserve" className="text-link light">رزرو یک مشاوره کوتاه <span>←</span></a>
      </div>
    </section>

    <section className="experience section-pad" id="gallery">
      <div className="experience-copy">
        <div className="eyebrow"><span></span> تجربه ماه زر</div>
        <h2>از اولین نگاه،<br/>حسِ <em>آرامش</em>.</h2>
        <p>فضای روشن، جزئیات طلایی و طراحی مینیمال کلینیک ماه زر، تجربه‌ای تمیز و آرام برای مراجعه‌کننده می‌سازد.</p>
        <div className="mini-list"><span>فضای اختصاصی و مرتب</span><span>طراحی روشن و مینیمال</span><span>دسترسی در غرب تهران</span></div>
      </div>
      <div className="gallery-grid">
        <figure className="g1"><img src="/assets/clinic-lobby.jpg" alt="لابی ماه زر"/><figcaption>فضای انتظار</figcaption></figure>
        <figure className="g2"><img src="/assets/clinic-front.jpg" alt="نمای بیرونی کلینیک ماه زر"/><figcaption>ورودی کلینیک</figcaption></figure>
        <figure className="g3"><img src="/assets/clinic-reception.jpg" alt="فضای پذیرش کلینیک"/><figcaption>پذیرش</figcaption></figure>
      </div>
    </section>

    <section className="journey section-pad">
      <div className="section-head compact">
        <div><div className="eyebrow"><span></span> مسیر مراجعه</div><h2>ساده، شفاف،<br/>بدون سردرگمی.</h2></div>
      </div>
      <div className="steps">
        <article><span>01</span><h3>رزرو</h3><p>زمان مناسب را برای مشاوره انتخاب می‌کنید.</p></article>
        <article><span>02</span><h3>ارزیابی</h3><p>شرایط، هدف و سابقه شما بررسی می‌شود.</p></article>
        <article><span>03</span><h3>طراحی مسیر</h3><p>روش مناسب و مراقبت‌های لازم توضیح داده می‌شود.</p></article>
        <article><span>04</span><h3>پیگیری</h3><p>بعد از انجام خدمت، مسیر مراقبت ادامه پیدا می‌کند.</p></article>
      </div>
    </section>

    <section className="faq section-pad" id="faq">
      <div className="faq-copy"><div className="eyebrow"><span></span> FAQ</div><h2>قبل از مراجعه،<br/>شاید این‌ها را<br/><em>بپرسی.</em></h2><p>برای اطلاعات پزشکی دقیق و انتخاب درمان، مشاوره حضوری ضروری است.</p></div>
      <div className="faq-list">
        {faq.map(([q,a],i)=><button className={`faq-item ${openFaq===i?'active':''}`} onClick={()=>setOpenFaq(openFaq===i?-1:i)} key={q}>
          <div><span>0{i+1}</span><b>{q}</b><i>{openFaq===i?'−':'+'}</i></div>
          <p>{a}</p>
        </button>)}
      </div>
    </section>

    <section className="reserve section-pad" id="reserve">
      <div className="reserve-panel">
        <div className="reserve-copy"><div className="eyebrow light-eye"><span></span> مشاوره</div><h2>شروع یک تغییر خوب،<br/>با یک گفت‌وگوی <em>کوتاه</em>.</h2><p>اطلاعاتتان را وارد کنید. در نسخه واقعی سایت، این فرم می‌تواند به سیستم رزرو یا CRM کلینیک متصل شود.</p><small>این نسخه فقط دمو است و اطلاعات ارسال نمی‌شوند.</small></div>
        <form onSubmit={submit}>
          <label>نام و نام خانوادگی<input required placeholder="مثلاً سارا احمدی"/></label>
          <div className="form-row"><label>شماره تماس<input required inputMode="tel" placeholder="09xxxxxxxxx"/></label><label>خدمت موردنظر<select defaultValue=""><option value="" disabled>انتخاب کنید</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label></div>
          <label>توضیح کوتاه<textarea rows="3" placeholder="اگر نکته‌ای هست که بهتر است بدانیم..."/></label>
          <button className="btn btn-gold wide" type="submit">{sent?'درخواست شما در نسخه نمایشی ثبت شد ✓':'ارسال درخواست مشاوره'} <IconArrow/></button>
        </form>
      </div>
    </section>

    <section className="contact section-pad" id="contact">
      <div className="contact-info">
        <div className="eyebrow"><span></span> تماس و موقعیت</div>
        <h2>ماه زر،<br/>در قلبِ تهران.</h2>
        <div className="contact-rows">
          <div><span>آدرس</span><b>تهران، بلوار دریا — کلینیک پوست، مو و زیبایی ماه زر</b></div>
          <div><span>تلفن</span><b><a href="tel:02191002555">۰۲۱ ۹۱۰۰ ۲۵۵۵</a></b></div>
          <div><span>مسیریابی</span><b><a target="_blank" rel="noreferrer" href="https://www.google.com/maps?q=35.7715149,51.3688693">باز کردن Google Maps ←</a></b></div>
        </div>
      </div>
      <div className="map-wrap"><iframe title="موقعیت کلینیک ماه زر" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=35.7715149,51.3688693&z=15&output=embed"></iframe><div className="map-badge"><Logo/></div></div>
    </section>

    <footer>
      <div className="footer-top"><Logo/><p>نمونه مفهومی وب‌سایت کلینیک پوست، مو و زیبایی ماه زر — طراحی شده برای ارائه دمو، بدون بک‌اند.</p><a className="btn btn-outline" href="#top">بازگشت به بالا ↑</a></div>
      <div className="footer-bottom"><span>© 2026 MAHZAR CLINIC — DEMO CONCEPT</span><span>React + Vite · RTL · Responsive</span></div>
    </footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App/>)
