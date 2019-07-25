/*
    Name: JOHN DOE
    Career: Full Stack Engineer / Instructor
    Description: I like turtles

    My Interests:
    * Fall TV (The best)
    * Locomotives
    * Observing awkward situations
    * Film soundtracks

    My Previous Experience:
    * Math, Chemistry, Physics, Biology, and English tutor at Some School - Tutored students in those areas.
    * Undergraduate Teaching Assistant at University of Georgia - Helped grade assignments, answer questions, held lab hours, and held office hours for Java and C++ Computer Science classes.
    * Lead Programmer for iBeacon Experiment at Georgia Museum of Art - Created native iOS virtual tour guide that used iBeacon technology to triangulate position within the museum and give information about a piece.

    My Skills:
    * French
    * BAM: Trombone
    * Java
    * C / C++
    * BAM: Objective-C / Swift
    * BAM: Opera Singing
    * Python
    * JavaScript
    * BAM: TypeScript
*/

displayPosition('Noah May', 'Full-stack Web Developer', 'Normal human being')

printList('My Interests', [
    'Programming',
    'Recreational Mathematics',
    'Biking',
    'Rubik\'s cubes',
    '3D printing (using a friend\'s printer)',
])

printList('My Previous Experience', [
    'Authored a completely obsolete package on PyPI (Python Package Index) - maintained it until I realized how useless it was (taught me useful information on packaging Python code)',
    'Created small GUI to model Conway\'s game of life - used it until I found out about the application "golly"',
    'Instructed a small group of Mid- to High-school students in a programming course - taught the basics of programming in Python',
])

let skillz = {
    'Python': true,
    'JavaScript': true,
    'Rubik\'s cubes (and non-cubes)': true,
    'Extensive knowledge on consumption of edibles': false,
    'Kung fu': false,
    'Held my breath for 2h 35m': false,
    'Move legs subconsciously to translate body laterally': false,
}

printList(
    'My Skills',
    Object.keys(skillz).map(key => coolSkill(key, skillz[key]))
)

function coolSkill(skill: string, isCool: boolean): string {
    return isCool ? 'BAM: ' + skill : skill
}

function printList(heading: string, list: string[]): void {
    console.group('%c' + heading + ':', 'color: red')
    for (let item of list) {
        console.log('%c' + item, 'color: purple')
    }
    console.groupEnd()
}

function displayPosition(name: string, career: string, desc: string): void {
    console.group('%cName: ' + name.toUpperCase(), 'color: blue')
    console.log('%cCareer: ' + career, 'color: blue')
    console.log('%cDescription: ' + desc, 'color: blue')
    console.groupEnd()
}
