export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black text-blue-600">KONGO</span>
            <span className="text-purple-600 text-2xl">·</span>
            <span className="text-purple-600 font-medium">TELEGRA</span>
          </div>
          <a href="#cta" className="text-purple-600 border border-purple-600 px-5 py-2 rounded-lg hover:bg-purple-50 transition font-medium">
            Request Early Access
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white text-center px-6">
        <h1 className="text-5xl md:text-6xl font-black mb-6">Your Pharmacy Workflow Is Slowing You Down.</h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10">
          Most MedSpas & health brands lose time because pharmacies are hard to reach. CTRL fixes that — giving you instant access to licensed pharmacies across all 50 states.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#cta" className="bg-white text-blue-600 px-10 py-5 rounded-lg text-lg font-bold hover:bg-gray-100">Get Free Access</a>
          <a href="#how" className="border-2 border-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-white/20">See How It Works</a>
        </div>
        <p className="mt-6 text-sm opacity-80">Free for launch partners · HIPAA + API · No code UI</p>
      </section>

      {/* Problem cards */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why most clinics struggle with fulfillment</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[{icon:"Clock",title:"Slow setup",text:"Integrations take weeks, delaying launches."},
              {icon:"Box",title:"Stock issues",text:"Pharmacies go out of stock unexpectedly."},
              {icon:"Map",title:"Limited states",text:"Licensing barriers restrict your reach."},
              {icon:"Envelope",title:"Manual work",text:"Routing still happens by email or fax."}]
              .map((c,i)=>
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-5xl mb-4">{c.icon}</div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">{c.title}</h3>
                <p className="text-gray-800">{c.text}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3 steps */}
      <section id="how" className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">CTRL fixes that in 3 steps</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[{num:"1",title:"Connect once",text:"One secure integration to access many licensed pharmacies."},
              {num:"2",title:"Route automatically",text:"Smart routing sends prescriptions to the fastest, in-stock partner."},
              {num:"3",title:"Deliver faster",text:"Patients receive medications quickly — without manual chasing."}]
              .map((s,i)=>
              <div key={i} className="bg-gradient-to-b from-blue-50 to-white p-10 rounded-3xl shadow-xl">
                <div className="text-6xl font-black text-blue-600 mb-4">{s.num}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{s.title}</h3>
                <p className="text-gray-800">{s.text}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Value grid + Route table + Badges */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Why CTRL creates value</h2>
          <p className="text-xl text-gray-800 mb-12">Built to replace one-off pharmacy integrations with a scalable, compliant network.</p>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {["One API, many pharmacies","Built-in financials","Smart routing","Real-time pricing","Observability","Security & compliance"]
              .map((t,i)=><div key={i} className="bg-white p-8 rounded-2xl shadow text-gray-900 font-medium">{t}</div>)}
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl inline-block">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Route by what matters</h3>
            <div className="grid grid-cols-4 gap-8 text-center">
              {["Cost","Speed","Availability","Coverage"].map((x,i)=>
                <div key={i}>
                  <div className="font-bold text-gray-900">{x}</div>
                  <div className="text-sm text-gray-800">
                    {i===0?"Lowest landed cost":i===1?"Target ship window":i===2?"Auto-skip stockouts":"State-by-state rules"}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-10">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">HIPAA Compliant</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Telegra Verified Partner</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Secure API Infrastructure</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What early partners are saying</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {quote:"“CTRL removed the weeks-long headache of setting up a pharmacy connection. We were prescribing within hours, not weeks.”",author:"— Dr. Maria Torres, Medical Director, Radiant MedSpa"},
              {quote:"“Integration was almost effortless. CTRL’s smart routing saved us during a product launch when our main partner ran out of stock.”",author:"— Alex Nguyen, Founder, Glow Health"},
              {quote:"“We love that CTRL gives us access to multiple licensed pharmacies with one integration — compliance and speed in one place.”",author:"— Sarah Patel, Owner, Luxe Aesthetics"}
            ].map((t,i)=>
              <div key={i} className="bg-white p-10 rounded-3xl shadow-xl">
                <p className="italic text-lg mb-6 text-gray-800">“{t.quote}”</p>
                <p className="font-semibold text-gray-900">{t.author}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-20 bg-gradient-to-r from-purple-700 to-indigo-800 text-white text-center px-6">
        <h2 className="text-5xl font-black mb-6">Request Early Access — Free for Launch Partners</h2>
        <p className="text-2xl mb-10">Join top MedSpas and health brands using CTRL to prescribe faster, smarter, and with less effort.</p>
        <a href="#" className="inline-block bg-white text-purple-700 px-12 py-6 rounded-xl text-2xl font-bold hover:bg-gray-100">
          Join Free This Month
        </a>
        <p className="mt-6 text-lg opacity-90">Limited launch spots available — offer ends soon</p>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-white text-center">
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="text-2xl font-black text-blue-400">KONGO</span>
          <span className="text-purple-400">·</span>
          <span className="text-purple-400">TELEGRa</span>
        </div>
        <p className="text-sm">© 2025 Kongo Health. All rights reserved.</p>
      </footer>
    </div>
  );
}
