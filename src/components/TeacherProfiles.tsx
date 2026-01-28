import { Card, CardContent } from "./ui/card-simple";
import { Badge } from "./ui/badge-simple";
import { Avatar } from "./ui/avatar-simple";
import { Star, GraduationCap, Users, Award, MapPin } from "./ui/icons-simple";

export function TeacherProfiles() {
  const teachers = [
    {
      name: "Olga Petrova",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
      title: "Lead Russian Language Instructor",
      location: "Moscow, Russia",
      experience: "15 years",
      students: "3,200+",
      rating: 4.9,
      specialization: ["Business Russian", "TORFL Preparation", "Advanced Grammar"],
      education: "PhD in Russian Linguistics, Moscow State University",
      languages: ["Russian (Native)", "English (C2)", "French (B2)"],
      bio: "Passionate about helping professionals master Russian for career advancement. Specializes in fast-tracking corporate learners.",
      certifications: ["TORFL Examiner", "Cambridge CELTA", "Business Russian Specialist"]
    },
    {
      name: "Dmitry Sokolov",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
      title: "Cultural Integration Specialist",
      location: "St. Petersburg, Russia",
      experience: "10 years",
      students: "2,500+",
      rating: 4.8,
      specialization: ["Conversational Russian", "Cultural Immersion", "Slang & Idioms"],
      education: "MA in Russian Culture & Literature, St. Petersburg State University",
      languages: ["Russian (Native)", "English (C1)", "German (B1)"],
      bio: "Focuses on real-world Russian and cultural nuances. Helps students sound natural and understand Russian humor.",
      certifications: ["Certified Russian Teacher", "Cultural Studies Specialist"]
    },
    {
      name: "Ekaterina Volkova",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
      title: "University Preparation Expert",
      location: "Kazan, Russia",
      experience: "12 years",
      students: "1,800+",
      rating: 5.0,
      specialization: ["Academic Russian", "University Entrance", "Scientific Vocabulary"],
      education: "MA in Education, Kazan Federal University",
      languages: ["Russian (Native)", "English (C2)", "Spanish (B2)"],
      bio: "Dedicated to preparing international students for Russian universities. 98% university acceptance rate.",
      certifications: ["TORFL Preparation Specialist", "Academic Russian Instructor"]
    },
    {
      name: "Alexei Ivanov",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
      title: "Pronunciation & Phonetics Coach",
      location: "Novosibirsk, Russia",
      experience: "8 years",
      students: "1,200+",
      rating: 4.9,
      specialization: ["Pronunciation", "Accent Reduction", "Phonetics"],
      education: "BA in Linguistics, Novosibirsk State University",
      languages: ["Russian (Native)", "English (C1)", "Chinese (A2)"],
      bio: "Specialist in helping learners achieve authentic Russian pronunciation. Uses innovative mouth position techniques.",
      certifications: ["Phonetics Specialist", "Speech Coach Certificate"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white mb-4">👨‍🏫 Meet Our Teachers</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Learn from Native Russian Experts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            All our teachers are native speakers with university degrees and years of teaching experience
          </p>
        </div>

        {/* Teacher Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {teachers.map((teacher, index) => (
            <Card key={index} className="border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar
                    src={teacher.avatar}
                    alt={teacher.name}
                    fallback={teacher.name.split(' ').map(n => n[0]).join('')}
                    className="w-20 h-20"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-1">{teacher.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{teacher.title}</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center space-x-1 text-sm">
                        <MapPin className="w-4 h-4 text-red-600" />
                        <span>{teacher.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4 bg-gray-50 rounded-lg p-3">
                  <div className="text-center">
                    <div className="font-bold text-blue-600">{teacher.experience}</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-600">{teacher.students}</div>
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-bold text-orange-600">{teacher.rating}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-muted-foreground mb-4">{teacher.bio}</p>

                {/* Specialization */}
                <div className="mb-4">
                  <div className="text-sm font-medium mb-2">Specialization:</div>
                  <div className="flex flex-wrap gap-2">
                    {teacher.specialization.map((spec, idx) => (
                      <Badge key={idx} className="bg-blue-100 text-blue-700 text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="mb-4 text-sm">
                  <div className="flex items-start space-x-2">
                    <GraduationCap className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{teacher.education}</span>
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <div className="text-sm font-medium mb-2">Languages:</div>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    {teacher.languages.map((lang, idx) => (
                      <span key={idx}>
                        {lang}
                        {idx < teacher.languages.length - 1 && <span className="mx-1">•</span>}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <div className="text-sm font-medium mb-2 flex items-center space-x-1">
                    <Award className="w-4 h-4 text-yellow-600" />
                    <span>Certifications:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {teacher.certifications.map((cert, idx) => (
                      <Badge key={idx} className="bg-yellow-100 text-yellow-800 text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 px-4 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
                  Book a Lesson with {teacher.name.split(' ')[0]}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Teachers CTA */}
        <Card className="border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardContent className="p-8 text-center">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">50+ Professional Teachers Available</h3>
            <p className="text-muted-foreground mb-6">
              Find the perfect teacher for your learning style and goals. All teachers are verified native speakers.
            </p>
            <button className="px-8 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-colors">
              Browse All Teachers
            </button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
