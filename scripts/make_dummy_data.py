#!python3

import argparse
import pymongo


def funtionality(host: str, port: int):

    driver = pymongo.MongoClient(host, port)

    # GAMES
    db = driver.games_db.games
    db.insert_many([
        {
            'gameCode': 'G1',
            'version': 'v1',
            'gameDescription': 'Game were LGTBI content is discussed',
            'chapters': ['C1', 'C2']
        },
        {
            'gameCode': 'G2',
            'version': 'v1',
            'gameDescription': 'Game were Minorities content is discussed',
            'chapters': ['C1', 'C2']
        },
    ])

    # CHAPTERS
    db = driver.games_db.chapters
    db.insert_many([
        {
            'chapterCode': 'C1',
            'gameCode': 'G1',
            'version': 'v1',
            'chapterDescription': 'Chapter-1: Welcome to the school',
            'startScene': 'scene1',
            'startX':'100',
            'startY':'100',
            'highlights': [
                "H1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "H2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ],
            'snapshot': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Happy_smiley_face.png/600px-Happy_smiley_face.png'
        },
        {
            'chapterCode': 'C2',
            'gameCode': 'G1',
            'version': 'v1',
            'chapterDescription': 'Chapter-2: Moms new job',
            'startScene': 'scene3',
            'startX':'100',
            'startY':'100',
            'highlights': [
                "H1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "H2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ],
            'snapshot': 'https://upload.wikimedia.org/wikipedia/commons/f/fa/718smiley.png'
        },
        {
            'chapterCode': 'C1',
            'gameCode': 'G2',
            'version': 'v1',
            'chapterDescription': 'Chapter-1: Leaving your home',
            'startScene': 'scene1',
            'startX':'100',
            'startY':'100',
            'highlights': [
                "H1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "H2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ],
            'snapshot': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/MOREmoji_kirakira.svg/512px-MOREmoji_kirakira.svg.png'
        },
        {
            'chapterCode': 'C2',
            'gameCode': 'G2',
            'version': 'v1',
            'chapterDescription': 'Chapter-2: Arriving to a new country',
            'startScene': 'scene3',
            'startX':'100',
            'startY':'100',
            'highlights': [
                "H1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "H2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ],
            'snapshot': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/MOREmoji_forcedsmile.svg/512px-MOREmoji_forcedsmile.svg.png'
        }
    ])

    # EVENTS
    db = driver.games_db.events
    db.insert_many([
        # GAME 1
        # CHAPTER 1
        {
            "_id":"e.G1.1.1",
            'chapterCode': 'C1',
            'gameCode': 'G1',
            'version': 'v1',
            "description": "Whats animal is your pet?",
            "highlights":[
                "H1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "H2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ],
            "type":"multiple-choice",
            "parentDecision":None,
            "possibleChoices":['cat', 'dog', 'no pet']
        },
        {
            "_id":"e.G1.1.2",
            'chapterCode': 'C1',
            'gameCode': 'G1',
            'version': 'v1',
            "description": "Seconds waiting for your friend?",
            "highlights":[
                "H1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "H2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ],
            "type":"timed",
            "parentDecision":None,
            "possibleChoices":['1', '90']
        },
        {
            "_id":"e.G1.1.3",
            'chapterCode': 'C1',
            'gameCode': 'G1',
            'version': 'v1',
            "description": "Who do you play with?",
            "highlights":[
                "H1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "H2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ],
            "type":"multiple-choice",
            "parentDecision":None,
            "possibleChoices":['Alan', 'Sally', 'play alone']
        },
        # CHAPTER 2
        {
            "_id":"e.G1.2.1",
            'chapterCode': 'C2',
            'gameCode': 'G1',
            'version': 'v1',
            "description": "Seconds spend in the exercise",
            "highlights":[
                "H1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "H2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ],
            "type":"timed",
            "parentDecision":None,
            "possibleChoices":['30', '90']
        },
        {
            "_id":"e.G1.2.2",
            'chapterCode': 'C2',
            'gameCode': 'G1',
            'version': 'v1',
            "description": "What do you have for lunch?",
            "highlights":[
                "H1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "H2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ],
            "type":"multiple-choice",
            "parentDecision":None,
            "possibleChoices":['pizza', 'hamburger', 'salad']
        },
        # GAME 2
        # CHAPTER 1
        {
            "_id":"e.G2.1.1",
            'chapterCode': 'C1',
            'gameCode': 'G2',
            'version': 'v1',
            "description": "What vehicule do you take?",
            "highlights":[
                "H1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "H2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ],
            "type":"multiple-choice",
            "parentDecision":None,
            "possibleChoices":['boat', 'car', 'walking']
        },
        {
            "_id":"e.G2.1.2",
            'chapterCode': 'C1',
            'gameCode': 'G2',
            'version': 'v1',
            "description": "Seconds spend hiding?",
            "highlights":[
                "H1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "H2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ],
            "type":"timed",
            "parentDecision":None,
            "possibleChoices":['1', '60']
        },
        # CHAPTER 2
        {
            "_id":"e.G2.2.1",
            'chapterCode': 'C2',
            'gameCode': 'G2',
            'version': 'v1',
            "description": "Seconds spend doing teh test",
            "highlights":[
                "H1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "H2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ],
            "type":"timed",
            "parentDecision":None,
            "possibleChoices":['30', '120']
        },
        {
            "_id":"e.G2.2.2",
            'chapterCode': 'C2',
            'gameCode': 'G2',
            'version': 'v1',
            "description": "Where do you sit?",
            "highlights":[
                "H1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "H2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ],
            "type":"multiple-choice",
            "parentDecision":None,
            "possibleChoices":['front', 'middle', 'back']
        },
    ])

    # GROUPS
    db = driver.games_db.groups
    db.insert_many([
        {
            '_id': 'UPM_3A',
            'country': 'Spain',
            'city': 'Madrid',
            'type': 'debug',
            'description': 'Class 3º A from UPM'
        },
        {
            '_id': 'UPM_3B',
            'country': 'Finland',
            'city': 'Oulu',
            'type': 'debug',
            'description': 'Class 3º B from UPM'
        },
    ])

    # STUDENTS
    db = driver.games_db.students
    db.insert_many([
        {
            '_id': '1',
            'groupCode': 'UPM_3A',
            'sex': 'Male',
            'age': '13'
        },
        {
            '_id': '2',
            'groupCode': 'UPM_3A',
            'sex': 'Female',
            'age': '12'
        },
        {
            '_id': '3',
            'groupCode': 'UPM_3B',
            'sex': 'Male',
            'age': '12'
        },
        {
            '_id': '4',
            'groupCode': 'UPM_3B',
            'sex': 'Female',
            'age': '13'
        }
    ])

    # DECISIONS
    db = driver.games_db.decisions
    db.insert_many([
        # Student 1
        # GAME 1
        # CHAPTER 1
        {
            'studentCode': '1',
            'eventCode':'e.G1.1.1',
            'fields': {'pet': 'cat'}
        },
        {
            'studentCode': '1',
            'eventCode':'e.G1.1.2',
            'fields': {'wait': '90'}
        },
        {
            'studentCode': '1',
            'eventCode':'e.G1.1.3',
            'fields': {'play': 'Alan'}
        },
        # CHAPTER 2
        {
            'studentCode': '1',
            'eventCode':'e.G1.2.1',
            'fields': {'wait': '35'}
        },
        {
            'studentCode': '1',
            'eventCode':'e.G1.2.2',
            'fields': {'eat': 'pizza'}
        },
        # Student 2
        # GAME 1
        # CHAPTER 1
        {
            'studentCode': '2',
            'eventCode':'e.G1.1.1',
            'fields': {'pet': 'dog'}
        },
        {
            'studentCode': '2',
            'eventCode':'e.G1.1.2',
            'fields': {'wait': '1'}
        },
        {
            'studentCode': '2',
            'eventCode':'e.G1.1.3',
            'fields': {'play': 'Sally'}
        },
        # CHAPTER 2
        {
            'studentCode': '2',
            'eventCode':'e.G1.2.1',
            'fields': {'wait': '60'}
        },
        {
            'studentCode': '2',
            'eventCode':'e.G1.2.2',
            'fields': {'eat': 'hamburger'}
        },
        # Student 3
        # GAME 1
        # CHAPTER 1
        {
            'studentCode': '3',
            'eventCode':'e.G1.1.1',
            'fields': {'pet': 'no pet'}
        },
        {
            'studentCode': '3',
            'eventCode':'e.G1.1.2',
            'fields': {'wait': '30'}
        },
        # CHAPTER 2
        {
            'studentCode': '3',
            'eventCode':'e.G1.1.3',
            'fields': {'play': 'Sally'}
        },
        # CHAPTER 2
        {
            'studentCode': '3',
            'eventCode':'e.G1.2.1',
            'fields': {'wait': '35'}
        },
        {
            'studentCode': '3',
            'eventCode':'e.G1.2.2',
            'fields': {'eat': 'pizza'}
        },
        # GAME 2
        # CHAPTER 1
        {
            'studentCode': '3',
            'eventCode':'e.G2.1.1',
            'fields': {'vehicule': 'boat'}
        },
        {
            'studentCode': '3',
            'eventCode':'e.G2.1.2',
            'fields': {'hide': '25'}
        },
        # CHAPTER 2
        {
            'studentCode': '3',
            'eventCode':'e.G2.2.1',
            'fields': {'spend': '60'}
        },
        {
            'studentCode': '3',
            'eventCode':'e.G2.2.2',
            'fields': {'sit': 'middle'}
        },
        # Student 4
        # GAME 1
        # CHAPTER 1
        {
            'studentCode': '4',
            'eventCode':'e.G1.1.1',
            'fields': {'pet': 'dog'}
        },
        {
            'studentCode': '4',
            'eventCode':'e.G1.1.2',
            'fields': {'wait': '5'}
        },
        {
            'studentCode': '4',
            'eventCode':'e.G1.1.3',
            'fields': {'play': 'play alone'}
        },
        # CHAPTER 2
        {
            'studentCode': '4',
            'eventCode':'e.G1.2.1',
            'fields': {'wait': '25'}
        },
        {
            'studentCode': '4',
            'eventCode':'e.G1.2.2',
            'fields': {'eat': 'hamburger'}
        },
        # GAME 2
        # CHAPTER 1
        {
            'studentCode': '4',
            'eventCode':'e.G2.1.1',
            'fields': {'vehicule': 'car'}
        },
        {
            'studentCode': '4',
            'eventCode':'e.G2.1.2',
            'fields': {'hide': '5'}
        },
        # CHAPTER 2
        {
            'studentCode': '4',
            'eventCode':'e.G2.2.1',
            'fields': {'spend': '90'}
        },
        {
            'studentCode': '4',
            'eventCode':'e.G2.2.2',
            'fields': {'sit': 'back'}
        }
    ])

    #FILTERS
    db = driver.games_db.filters
    db.insert_many([
        {
            '_id': 'g_country',
            'table': 'groups',
            'field': 'country',
            'type': 'textual'
        },
        {
            '_id': 'g_city',
            'table': 'groups',
            'field': 'city',
            'type': 'textual'
        },
        {
            '_id': 's_sex',
            'table': 'students',
            'field': 'sex',
            'type': 'textual'
        },
        {
            '_id': 's_age',
            'table': 'students',
            'field': 'age',
            'type': 'numeric'
        },
    ])

    # USERS
    db = driver.games_db.credentials
    db.insert_many([
        {
            '_id': 'admin',
            'password': '1234',
            'role': 'admin',
            'groups': ['UPM_3A', 'UPM_3B'],
            'filters': ['g_country', 'g_city', 's_sex', 's_age']
        },
        {
            '_id': 'adam',
            'password': '1234',
            'role': 'teacher',
            'groups': ['UPM_3A'],
            'filters': ['g_country', 'g_city', 's_age']
        },
    ])


def main():
    # how to use: read_db -o test.csv -d mixto_03 -s standard

    parser = argparse.ArgumentParser(description="fills a Youngres dummy database into a mongodb instance")

    parser.add_argument('-i', type=str, nargs=1, help="ip of the host with the mongo database")
    parser.add_argument('-p', type=str, nargs=1, help="port")

    args = parser.parse_args()
    funtionality(args.i[0], int(args.p[0]))


if __name__ == "__main__":
    main()
