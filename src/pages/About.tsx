import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Globe, Landmark, Users, Leaf, Map } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-kazakh-blue/10 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-kazakh-night">Қазақстан туралы</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Әлемдегі 9-шы ең үлкен елдің бай тарихын, әртүрлі мәдениетін және керемет табиғатын ашыңыз.
            </p>
          </div>
          
          {/* Country Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1590613607026-05681587571a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Қазақстан табиғаты" 
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-kazakh-blue">Еуразияның жүрегі</h2>
              <p className="text-gray-700 mb-4">
                Еуропа мен Азияның шекарасында орналасқан Қазақстан – дала, таулар, көлдер мен шөлдердің ұлан-байтақ жері. Батыс Еуропадан да үлкен аумақта табиғи әртүрліліктің және бай мәдени мұраның мекені.
              </p>
              <p className="text-gray-700 mb-6">
                100-ден астам этникалық топтан құралған 19 миллионнан астам халқы бар Қазақстан қонақжайлылығымен, көшпелі дәстүрлерімен және Алматы мен Астана сияқты жылдам дамып келе жатқан қалаларымен танымал.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-kazakh-night">Мемлекеттік тіл</p>
                  <p className="text-gray-600">Қазақ және Орыс</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-kazakh-night">Валюта</p>
                  <p className="text-gray-600">Теңге (₸)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-kazakh-night">Халық саны</p>
                  <p className="text-gray-600">19+ Миллион</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-kazakh-night">Аумағы</p>
                  <p className="text-gray-600">2.72 Млн км²</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Attractions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-kazakh-night">Басты көрікті жерлер</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1569115316367-164e2f55d48a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Шарын шатқалы" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-kazakh-blue">Шарын шатқалы</h3>
                  <p className="text-gray-700">
                    Ұлы каньонның кіші бауыры аталған бұл керемет қызыл құмтас шатқалы Шарын өзені бойымен 90 км созылып жатыр.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1634584267553-5f6fe46ee9f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Бәйтерек мұнарасы" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-kazakh-blue">Бәйтерек мұнарасы</h3>
                  <p className="text-gray-700">
                    Астананың символы болған бұл 97 метрлік монумент қазақ мифологиясындағы Самұрық құсын бейнелейді және қаланың панорамалық көрінісін ұсынады.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1615215271299-608ddf7e5f1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Көлсай көлдері" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-kazakh-blue">Көлсай көлдері</h3>
                  <p className="text-gray-700">
                    "Солтүстік Тянь-Шаньның маржандары" аталған үш керемет таулы көл, альпілік ормандар мен шалғындармен қоршалған.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Culture Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-kazakh-night">Мәдениет және мұра</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <Landmark className="text-kazakh-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-kazakh-night">Көшпелі мұра</h3>
                    <p className="text-gray-700">
                      Ғасырлар бойы қазақтар малын кең далада көшіріп жүрген көшпелі халық болған. Бұл көшпелі мұра қазақ асханасына, музыкасына және қонақжайлылық дәстүрлеріне әсер етуін жалғастыруда.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <Users className="text-kazakh-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-kazakh-night">Қонақжайлылық</h3>
                    <p className="text-gray-700">
                      Қонақжайлылық қазақ мәдениетінде терең тамырланған. Қонақтарды құрметпен қарсы алады және көбінесе бешбармақ (ет пен кеспе) және қымыз (бие сүті) сияқты дәстүрлі тағамдарды бөлісуге шақырады.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="text-kazakh-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-kazakh-night">Мәдени әртүрлілік</h3>
                    <p className="text-gray-700">
                      Қазақстанда 100-ден астам этникалық топ тату-тәтті өмір сүруде. Бұл әртүрлілік көптеген фестивальдар, мәдени іс-шаралар және төзімділік пен бірлік ұлттық саясаты арқылы тойланады.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1541855999730-c0da9d49567a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Қазақ мәдени мерекесі" 
                  className="rounded-lg shadow-md w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Travel Tips */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-kazakh-night">Саяхат кеңестері</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-kazakh-blue">Саяхаттау маусымы</h3>
                <p className="text-gray-700 mb-6">
                  Қазақстанға саяхаттаудың ең қолайлы уақыты – мамыр мен қыркүйек аралығы, ауа райы жылы және сыртқы іс-шаралар ұйымдастыруға қолайлы кез.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 text-kazakh-blue">Виза ақпараты</h3>
                <p className="text-gray-700">
                  Көптеген елдердің азаматтары Қазақстанға қысқа мерзімге визасыз келе алады. Туризмді дамыту мақсатында жиі жаңартылып тұратын виза талаптарын алдын ала тексеріп алыңыз.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-kazakh-blue">Тіл</h3>
                <p className="text-gray-700 mb-6">
                  Қазақ тілі – мемлекеттік тіл, бірақ орыс тілі де кеңінен қолданылады. Туристік аймақтар мен үлкен қалаларда ағылшын тілінде сөйлейтіндер де бар.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 text-kazakh-blue">Жол жүру</h3>
                <p className="text-gray-700">
                  Қазақстанда үлкен қалалар арасында жақсы әуе байланысы бар. Алыс қашықтыққа жүру үшін пойыздар ыңғайлы, ал қысқа қашықтықтарға такси мен автобустар қызмет көрсетеді.
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-kazakh-night">Қазақстанды зерттеуге дайынсыз ба?</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Біз сізге осы таңғажайып елге ұмытылмас саяхат жасауға көмектесеміз. Көшпенділер әлемінен бастап қала зерттеулеріне дейін, біз сіз үшін тамаша маршрут жасаймыз.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/plan">
                <Button className="bg-kazakh-blue hover:bg-kazakh-night text-white px-8 py-6 h-auto text-lg">
                  Саяхатыңызды жоспарлаңыз
                </Button>
              </Link>
              <Link to="/destinations">
                <Button variant="outline" className="border-kazakh-blue text-kazakh-blue hover:bg-kazakh-blue hover:text-white px-8 py-6 h-auto text-lg">
                  Бағыттарды зерттеу
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
