import React, { useEffect } from 'react';
import { ScrollText, TrendingUp, Users, LineChart, Rocket, CheckCircle2, Brain } from 'lucide-react';

const weeks = [
  {
    week: 1,
    icon: <Brain className="w-6 h-6" />,
    title: "Business Problem Identification",
    content: `Chewtopia is a solution to the problem of refreshment options not being convenient or accessible to students in our school community. Many students, throughout the long days of school, especially between classes, extracurricular activities, or after school, are experiencing fatigue or hunger, yet current options are limited, inconvenient, or unavailable at critical times. This affects students' focus, energy levels, and overall well-being, which often results in reduced productivity and concentration. Chewtopia will provide healthy, affordable, and accessible snacks and beverages for students to take away in order to retain energy and concentration. Besides solving this practical problem, Chewtopia would also provide a friendly atmosphere for students to hang out, be with friends, and regain their strength for a whole school day.`
  },
  {
    week: 2,
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Unique Value Proposition",
    content: `What makes Chewtopia so special is the fact that, unlike other choices, it aims specifically at the students' tight schedules with quick, handy refreshments that are not easily accessible through those already at disposal. Whereas the vending machines or the school cafeteria would be more oriented toward traditional snacks or meals, respectively, Chewtopia specialized in providing a unique selection of gum and drinks that were easy to grab and enjoy on-the-go, especially between classes or during short breaks. With portability and speed in mind, our emphasis ensures that students can get an energy boost in the quickest amount of time possible without interrupting their day. In addition, Chewtopia provides tailored solutions to meet students' specific needs in ways other school activities or businesses currently don't.`
  },
  {
    week: 3,
    icon: <ScrollText className="w-6 h-6" />,
    title: "Action Plan Development",
    content: `We have drafted an organized action plan to ensure the smooth running of our Venture Day. Two days in advance of the event, we will have all our products and prepare our poster so that everything is ready in advance. On the day, we will put up our stand early, probably during the Business period, so we will be smartly appealing. We will clearly define roles: Ayan (me) does the sales and pushes along people who are confused, Maksim keeps the money and keeps track of who paid how much, and Taha does marketing to get more people to our stand. We will make clear, visible signs of what our prices are, even making a poster in our own design to base it off of the cookie project that worked so well.`
  },
  {
    week: 4,
    icon: <LineChart className="w-6 h-6" />,
    title: "Progress Assessment",
    content: `We have completed the forecasted income statement and reached a conclusion about the products we need to purchase to use in our venture. Even though those are complete, there are still some things to direct our focus to: one thing we must start focusing our time on is preparation of our presentation. This includes brainstorming how to effectively showcase our idea, refine the details of our pitch, and work on explanations so our value proposition is clear and our plan of action transparently clear. This we can do by devoting much time to ensuring that our presentation is polished and engaging, bringing forth the strengths of Chewtopia clearly.`
  },
  {
    week: 5,
    icon: <Rocket className="w-6 h-6" />,
    title: "Final Preparations",
    content: `As for planning and running Chewtopia, we still have to finish up the design of the poster and presentation. We also had an issue where we discovered that we had received 20 packs of gum instead of 27; some even looked like they had been tampered with or misplaced. So this has meant we have to put the price up slightly so we will be able to make a profit from it. The next step will be to revise our pricing strategy, update the sales plan, and finalize the presentation so that everything goes smoothly on Venture Day.`
  },
  {
    week: 6,
    icon: <Users className="w-6 h-6" />,
    title: "Team Dynamics",
    content: `We triple checked to make sure that the coke, gum pack and the poster were in a safe spot and practised our pitch. We also made a phrase to lure customers to buy our product. I had to prepare the pitch, and helped my peers practice. I also took leadership when it came to selling the products. I would speak to customers and try to sell the product. We would listen to each other's ideas and try to mediate it to come to a decision. This helped us solve most of the problems.`
  },
  {
    week: 7,
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Post-Sale Analysis",
    content: `Our actual sales were far more than what our forecasted income statement indicated; instead of an anticipated $25 profit, Chewtopia actually earned $31. We are so proud, because from this result our pricing and sales strategies proved to be successful. We are successful in adjusting the price during the shortage of products and the way of communicating with our customers was responsible for such results. Moving forward, we would analyze which products were most popular to refine our offerings and potentially experiment with different promotional strategies to boost sales even further. Generally speaking, we are satisfied with the results and feel confident in the strategies we employed.`
  }
];

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const elements = document.querySelectorAll('.fade-in, .sand-animation');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="h-screen flex flex-col items-center justify-center relative">
        <h1 className="text-7xl font-bold mb-4 tracking-tight">Chewtopia Journey</h1>
        <div className="absolute bottom-32 text-2xl text-gray-400 fade-in">
          A Student Venture Success Story
        </div>
        <div className="absolute bottom-12 animate-bounce">
          <ScrollText className="w-8 h-8" />
        </div>
      </div>

      {/* Timeline Section */}
      <div className="min-h-screen px-8 pb-32">
        <div className="max-w-4xl mx-auto">
          {weeks.map((week, index) => (
            <div
              key={week.week}
              className="relative mb-16 group fade-in"
            >
              {/* Timeline line */}
              {index !== weeks.length - 1 && (
                <div className="absolute left-[2.25rem] top-12 w-0.5 h-full bg-gray-800 -z-10"></div>
              )}

              {/* Week card */}
              <div className="flex gap-8 items-start group-hover:transform group-hover:scale-105 transition-all duration-300">
                {/* Timeline node */}
                <div className="bg-gray-900 p-3 rounded-full shadow-lg border border-gray-800">
                  {week.icon}
                </div>

                {/* Content */}
                <div className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 flex-1 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-800">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-gray-400 font-mono">Week {week.week}</span>
                    <h2 className="text-2xl font-bold">{week.title}</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{week.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Production Plan Section */}
      <div className="min-h-screen flex items-center px-8">
        <div className="max-w-4xl mx-auto sand-animation">
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-8 border border-gray-800">
            <h2 className="text-3xl font-bold mb-6">Production Plan</h2>
            <p className="text-gray-300 mb-6">
              The only way to ensure we had more sales than other ambitious businesses, like the shirt business, 
              was offering very low prices. Keeping our prices affordable meant more students and higher volume sales, 
              distinguishing us from competition.
            </p>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Team Responsibilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
                  <h4 className="font-bold mb-2">Ayan</h4>
                  <p className="text-gray-300">Marketing + Creating the poster (both the one hanged at the walls and marketing poster)</p>
                </div>
                <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
                  <h4 className="font-bold mb-2">Taha</h4>
                  <p className="text-gray-300">Buying drinks + Selling</p>
                </div>
                <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
                  <h4 className="font-bold mb-2">Maksim</h4>
                  <p className="text-gray-300">Creating income statements + Helping others a bit if they need help</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">What Went Smoothly</h3>
              <p className="text-gray-300">
                The ideation and the purchase of goods was fairly easy. Much like the cookie project, our group 
                was quite open to each other in terms of participation, so everybody's opinions had been heard 
                and considered, and that made it relatively easy. Having this kind of mindset, we decided very 
                shortly what to sell and how it was possible. It is easy to put into place and work the plan 
                when everyone can work well together, share ideas, and support each other in bringing our vision 
                of Chewtopia into being.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Poster Section */}
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="sand-animation max-w-[800px] w-full">
          <img 
            src="https://i.ibb.co/FsHyqHh/hi.png"
            alt="Chewtopia Poster" 
            className="rounded-lg shadow-2xl border border-gray-800 w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
