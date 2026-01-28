import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card-simple";
import { Badge } from "./ui/badge-simple";
import { Button } from "./ui/button-simple";
// import { Slider } from "./ui/slider";
import { Progress } from "./ui/progress-simple";
import { 
  Calculator, 
  Home, 
  UtensilsCrossed, 
  Bus,
  Shirt,
  Wifi,
  Phone,
  Car,
  BookOpen,
  Coffee,
  MapPin,
  DollarSign,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Target,
  PiggyBank,
  CreditCard,
  Building
} from "./ui/icons-simple";

export function CostOfLivingCalculator() {
  const [selectedCity, setSelectedCity] = useState("moscow");
  const [housingType, setHousingType] = useState("shared");
  const [lifestyle, setLifestyle] = useState("moderate");
  const [studyType, setStudyType] = useState("full-time");

  const cities = [
    {
      id: "moscow",
      name: "Moscow",
      nameRu: "Москва",
      population: "12.5M",
      isCapital: true,
      description: "Political and economic center with highest living costs but best opportunities",
      costIndex: 100
    },
    {
      id: "petersburg",
      name: "St. Petersburg",
      nameRu: "Санкт-Петербург",
      population: "5.4M",
      isCapital: false,
      description: "Cultural capital with rich history and more affordable than Moscow",
      costIndex: 75
    },
    {
      id: "novosibirsk",
      name: "Novosibirsk",
      nameRu: "Новосибирск",
      population: "1.6M",
      isCapital: false,
      description: "Siberian hub with lower costs and strong educational institutions",
      costIndex: 45
    },
    {
      id: "kazan",
      name: "Kazan",
      nameRu: "Казань",
      population: "1.3M",
      isCapital: false,
      description: "Historic city with multicultural atmosphere and affordable living",
      costIndex: 50
    },
    {
      id: "ekaterinburg",
      name: "Ekaterinburg",
      nameRu: "Екатеринбург",
      population: "1.5M",
      isCapital: false,
      description: "Industrial center with growing tech sector and reasonable costs",
      costIndex: 55
    }
  ];

  const baseCosts = {
    moscow: {
      housing: {
        shared: 25000,
        studio: 45000,
        apartment: 75000
      },
      food: 15000,
      transport: 2500,
      utilities: 4000,
      internet: 800,
      phone: 500,
      entertainment: 8000,
      clothing: 5000,
      education: 3000,
      healthcare: 2000
    },
    petersburg: {
      housing: {
        shared: 18000,
        studio: 35000,
        apartment: 55000
      },
      food: 12000,
      transport: 2000,
      utilities: 3500,
      internet: 700,
      phone: 400,
      entertainment: 6000,
      clothing: 4000,
      education: 2500,
      healthcare: 1500
    },
    novosibirsk: {
      housing: {
        shared: 12000,
        studio: 20000,
        apartment: 35000
      },
      food: 8000,
      transport: 1500,
      utilities: 2500,
      internet: 600,
      phone: 300,
      entertainment: 4000,
      clothing: 3000,
      education: 2000,
      healthcare: 1000
    },
    kazan: {
      housing: {
        shared: 13000,
        studio: 22000,
        apartment: 38000
      },
      food: 8500,
      transport: 1200,
      utilities: 2800,
      internet: 550,
      phone: 350,
      entertainment: 4500,
      clothing: 3200,
      education: 2200,
      healthcare: 1200
    },
    ekaterinburg: {
      housing: {
        shared: 14000,
        studio: 25000,
        apartment: 42000
      },
      food: 9000,
      transport: 1400,
      utilities: 3000,
      internet: 600,
      phone: 400,
      entertainment: 5000,
      clothing: 3500,
      education: 2300,
      healthcare: 1300
    }
  };

  const lifestyleMultipliers = {
    budget: 0.7,
    moderate: 1.0,
    comfortable: 1.4
  };

  const currentCity = cities.find(city => city.id === selectedCity);
  const currentCosts = baseCosts[selectedCity];
  const multiplier = lifestyleMultipliers[lifestyle];

  const calculateMonthlyCost = () => {
    const housing = currentCosts.housing[housingType];
    const food = currentCosts.food * multiplier;
    const transport = currentCosts.transport;
    const utilities = currentCosts.utilities;
    const internet = currentCosts.internet;
    const phone = currentCosts.phone;
    const entertainment = currentCosts.entertainment * multiplier;
    const clothing = currentCosts.clothing * multiplier;
    const education = studyType === "full-time" ? currentCosts.education : currentCosts.education * 0.5;
    const healthcare = currentCosts.healthcare;

    return {
      housing,
      food,
      transport,
      utilities,
      internet,
      phone,
      entertainment,
      clothing,
      education,
      healthcare,
      total: housing + food + transport + utilities + internet + phone + entertainment + clothing + education + healthcare
    };
  };

  const monthlyBreakdown = calculateMonthlyCost();

  const costCategories = [
    {
      category: "Housing",
      amount: monthlyBreakdown.housing,
      icon: Home,
      color: "blue",
      description: housingType === "shared" ? "Shared apartment/dorm" : housingType === "studio" ? "Studio apartment" : "1-bedroom apartment"
    },
    {
      category: "Food & Groceries",
      amount: monthlyBreakdown.food,
      icon: UtensilsCrossed,
      color: "green",
      description: "Groceries, dining out, and meal preparation"
    },
    {
      category: "Transportation",
      amount: monthlyBreakdown.transport,
      icon: Bus,
      color: "purple",
      description: "Metro, bus, taxi, and occasional travel"
    },
    {
      category: "Utilities",
      amount: monthlyBreakdown.utilities,
      icon: Building,
      color: "orange",
      description: "Electricity, heating, water, garbage"
    },
    {
      category: "Internet & Phone",
      amount: monthlyBreakdown.internet + monthlyBreakdown.phone,
      icon: Wifi,
      color: "indigo",
      description: "High-speed internet and mobile plan"
    },
    {
      category: "Entertainment",
      amount: monthlyBreakdown.entertainment,
      icon: Coffee,
      color: "pink",
      description: "Movies, cafes, social activities, hobbies"
    },
    {
      category: "Clothing & Personal",
      amount: monthlyBreakdown.clothing,
      icon: Shirt,
      color: "yellow",
      description: "Clothes, personal care, toiletries"
    },
    {
      category: "Education & Books",
      amount: monthlyBreakdown.education,
      icon: BookOpen,
      color: "red",
      description: "Study materials, courses, academic supplies"
    }
  ];

  const partTimeJobIncome = {
    moscow: { min: 25000, max: 60000 },
    petersburg: { min: 20000, max: 45000 },
    novosibirsk: { min: 15000, max: 30000 },
    kazan: { min: 16000, max: 32000 },
    ekaterinburg: { min: 17000, max: 35000 }
  };

  const currentJobIncome = partTimeJobIncome[selectedCity];
  const incomeVsExpenses = (currentJobIncome.max / monthlyBreakdown.total) * 100;

  const budgetingTips = [
    {
      tip: "University Dormitories",
      description: "Often 30-50% cheaper than private housing",
      savings: "₽8,000-15,000/month",
      icon: Building
    },
    {
      tip: "Student Discounts",
      description: "Museums, theaters, transport, and food",
      savings: "₽3,000-5,000/month",
      icon: Target
    },
    {
      tip: "Cooking at Home",
      description: "Meal prep vs eating out daily",
      savings: "₽6,000-10,000/month",
      icon: UtensilsCrossed
    },
    {
      tip: "Part-time Work",
      description: "20 hours/week can cover most expenses",
      savings: `₽${currentJobIncome.min.toLocaleString()}-${currentJobIncome.max.toLocaleString()}/month`,
      icon: DollarSign
    }
  ];

  const emergencyFund = monthlyBreakdown.total * 2; // 2 months of expenses

  return (
    <section id="cost-calculator" className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2">
              <Calculator className="w-4 h-4 mr-2" />
              Cost Planning Tool
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cost of Living Calculator 💰
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Plan your budget for studying and living in Russia. Get accurate cost estimates 
            for different cities and lifestyle choices to prepare for your journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-1">
            <Card className="border-border sticky top-4">
              <CardHeader>
                <CardTitle>Customize Your Estimate</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Adjust settings to match your situation
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* City Selection */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Choose City
                  </label>
                  <div className="space-y-2">
                    {cities.map((city) => (
                      <div
                        key={city.id}
                        className={`p-3 border rounded-lg cursor-pointer transition-all ${
                          selectedCity === city.id 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-border hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedCity(city.id)}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{city.name}</span>
                            {city.isCapital && <Badge className="bg-red-600 text-white text-xs">Capital</Badge>}
                          </div>
                          <span className="text-xs text-muted-foreground">{city.population}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{city.nameRu}</p>
                        <p className="text-xs text-muted-foreground mt-1">{city.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Housing Type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Housing Preference
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: "shared", name: "Shared Room/Dorm", desc: "Most budget-friendly" },
                      { id: "studio", name: "Studio Apartment", desc: "Private space, compact" },
                      { id: "apartment", name: "1-Bedroom Apartment", desc: "Maximum comfort" }
                    ].map((option) => (
                      <div
                        key={option.id}
                        className={`p-3 border rounded-lg cursor-pointer transition-all ${
                          housingType === option.id 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-border hover:border-gray-300'
                        }`}
                        onClick={() => setHousingType(option.id)}
                      >
                        <div className="font-medium text-sm">{option.name}</div>
                        <div className="text-xs text-muted-foreground">{option.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lifestyle */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Lifestyle Choice
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: "budget", name: "Budget", desc: "Minimal spending, home cooking" },
                      { id: "moderate", name: "Moderate", desc: "Balanced lifestyle" },
                      { id: "comfortable", name: "Comfortable", desc: "Regular dining out, entertainment" }
                    ].map((option) => (
                      <div
                        key={option.id}
                        className={`p-3 border rounded-lg cursor-pointer transition-all ${
                          lifestyle === option.id 
                            ? 'border-purple-500 bg-purple-50' 
                            : 'border-border hover:border-gray-300'
                        }`}
                        onClick={() => setLifestyle(option.id)}
                      >
                        <div className="font-medium text-sm">{option.name}</div>
                        <div className="text-xs text-muted-foreground">{option.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Study Type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Study Schedule
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: "full-time", name: "Full-time Student", desc: "Focus on studies" },
                      { id: "part-time", name: "Part-time + Work", desc: "Balance study and work" }
                    ].map((option) => (
                      <div
                        key={option.id}
                        className={`p-3 border rounded-lg cursor-pointer transition-all ${
                          studyType === option.id 
                            ? 'border-orange-500 bg-orange-50' 
                            : 'border-border hover:border-gray-300'
                        }`}
                        onClick={() => setStudyType(option.id)}
                      >
                        <div className="font-medium text-sm">{option.name}</div>
                        <div className="text-xs text-muted-foreground">{option.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Total Cost Summary */}
            <Card className="border-border">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      Monthly Budget for {currentCity?.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {lifestyle.charAt(0).toUpperCase() + lifestyle.slice(1)} lifestyle • {housingType.replace('_', ' ')} housing
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-foreground">
                      ₽{monthlyBreakdown.total.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">per month</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-xl font-bold text-blue-600">
                      ₽{(monthlyBreakdown.total * 12).toLocaleString()}
                    </div>
                    <div className="text-sm text-blue-800">Annual Cost</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-xl font-bold text-green-600">
                      ₽{emergencyFund.toLocaleString()}
                    </div>
                    <div className="text-sm text-green-800">Emergency Fund</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-xl font-bold text-purple-600">
                      {Math.round(incomeVsExpenses)}%
                    </div>
                    <div className="text-sm text-purple-800">Covered by Part-time Work</div>
                  </div>
                </div>

                {/* Income vs Expenses */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Part-time Job Income vs Monthly Expenses</span>
                    <span>₽{currentJobIncome.max.toLocaleString()} max income</span>
                  </div>
                  <Progress value={Math.min(incomeVsExpenses, 100)} className="h-3" />
                  <div className="text-xs text-muted-foreground mt-1">
                    {incomeVsExpenses >= 100 
                      ? "✅ Part-time work can cover all expenses" 
                      : `⚠️ Additional ₽${(monthlyBreakdown.total - currentJobIncome.max).toLocaleString()} needed monthly`
                    }
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cost Breakdown */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Detailed Breakdown</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Monthly expenses by category
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {costCategories.map((category, index) => {
                    const IconComponent = category.icon;
                    const percentage = (category.amount / monthlyBreakdown.total) * 100;
                    
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className={category.category === 'Housing' ? 'w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0' :
                                        category.category === 'Food & Groceries' ? 'w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0' :
                                        category.category === 'Transportation' ? 'w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0' :
                                        category.category === 'Utilities' ? 'w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0' :
                                        category.category === 'Internet & Phone' ? 'w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0' :
                                        category.category === 'Entertainment' ? 'w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0' :
                                        category.category === 'Clothing & Personal' ? 'w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0' :
                                        'w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0'}>
                          <IconComponent className={category.category === 'Housing' ? 'w-5 h-5 text-blue-600' :
                                                   category.category === 'Food & Groceries' ? 'w-5 h-5 text-green-600' :
                                                   category.category === 'Transportation' ? 'w-5 h-5 text-purple-600' :
                                                   category.category === 'Utilities' ? 'w-5 h-5 text-orange-600' :
                                                   category.category === 'Internet & Phone' ? 'w-5 h-5 text-indigo-600' :
                                                   category.category === 'Entertainment' ? 'w-5 h-5 text-pink-600' :
                                                   category.category === 'Clothing & Personal' ? 'w-5 h-5 text-yellow-600' :
                                                   'w-5 h-5 text-red-600'} />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-foreground">{category.category}</span>
                            <span className="text-sm font-bold">₽{category.amount.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-2 mb-1">
                            <Progress value={percentage} className="h-2 flex-1" />
                            <span className="text-xs text-muted-foreground w-8">{Math.round(percentage)}%</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{category.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Money-Saving Tips */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PiggyBank className="w-5 h-5 text-green-600" />
                  Money-Saving Tips
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Ways to reduce your monthly expenses in {currentCity?.name}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {budgetingTips.map((tip, index) => {
                    const IconComponent = tip.icon;
                    return (
                      <div key={index} className="p-4 border border-border rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-4 h-4 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground mb-1">{tip.tip}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{tip.description}</p>
                            <Badge className="bg-green-100 text-green-800 text-xs">
                              Save {tip.savings}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Financial Preparation Checklist */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  Financial Preparation Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      item: "Save emergency fund (2-3 months expenses)",
                      amount: `₽${(monthlyBreakdown.total * 2.5).toLocaleString()}`,
                      priority: "high"
                    },
                    {
                      item: "First month rent + deposit",
                      amount: `₽${(monthlyBreakdown.housing * 2).toLocaleString()}`,
                      priority: "high"
                    },
                    {
                      item: "Initial setup costs (furniture, kitchen supplies)",
                      amount: "₽15,000-30,000",
                      priority: "medium"
                    },
                    {
                      item: "Travel and arrival expenses",
                      amount: "₽20,000-50,000",
                      priority: "medium"
                    },
                    {
                      item: "Documents and visa costs",
                      amount: "₽10,000-25,000",
                      priority: "high"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded border-2 ${
                          item.priority === 'high' ? 'border-red-500 bg-red-100' : 'border-yellow-500 bg-yellow-100'
                        }`}></div>
                        <span className="text-sm text-foreground">{item.item}</span>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{item.amount}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <Calculator className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Plan Your Russian Adventure?
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Use our cost calculator to create a realistic budget for your studies in Russia. 
            Proper financial planning ensures a smooth transition to your new life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8">
              <PiggyBank className="w-5 h-5 mr-2" />
              Save Budget Plan
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8">
              <CreditCard className="w-5 h-5 mr-2" />
              Get Financial Advice
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}