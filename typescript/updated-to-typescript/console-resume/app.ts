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

displayPosition(
    name='Noah May',
    career='Full-stack Web Developer',
    desc='Normal human being'
)

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

skillz = {
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

function coolSkill(skill, isCool) {
    return isCool ? 'BAM: ' + skill : skill
}

function printList(heading, list) {
    console.log(heading + ':')
    for (let item of list) {
        console.log('* ' + item)
    }
    console.log('\n')
}

function displayPosition(name, career, desc) {
    console.log('Name: ' + name.toUpperCase())
    console.log('Career: ' + career)
    console.log('Description: ' + desc)
    console.log('\n')
}
