#!/usr/bin/env python3

import connexion

from swagger_server import encoder
from swagger_server.mongo_connection.mongo_connector import MongoDBConnection


def main():
    
    #initilize connection with MongoDB
    MongoDBConnection.initialize_connection('db', 27017)
    #MongoDBConnection.drop_database()
    #resultGroups = MongoDBConnection.get_groups_collection().insert_many([{'_id':'group1','country':'spain','city':'madrid','type':'Unknown1','description':'Test Group 1'},
    #                                                                      {'_id':'group2','country':'finland','city':'oslo','type':'Unknown2','description':'Test Group 2'}])
    #resultStudents = MongoDBConnection.get_students_collection().insert_many([{'_id':'student1','groupCode':'group1','sex':'Male','age':12},
    #                                                                          {'_id':'student2','groupCode':'group2','sex':'Female','age':13}])
    #resultSavedStated = MongoDBConnection.get_saved_states_collection().insert_many([{'studentCode':'student1','gameCode':'game1','version':'0.1','JSON variables':{'variable1':'value1','variable2':'value2'}},
    #                                                                                 {'studentCode':'student2','gameCode':'game1','version':'0.1','JSON variables':{'variable3':'value3','variable4':'value4'}},
    #                                                                                 {'studentCode':'student1','gameCode':'game2','version':'0.1','JSON variables':{'variable5':'value5','variable6':'value6'}},
    #                                                                                 {'studentCode':'student2','gameCode':'game2','version':'0.1','JSON variables':{'variable7':'value7','variable8':'value8'}}])
    #resultGames = MongoDBConnection.get_games_collection().insert_many([{'gameCode':'game1','version':'0.1','chapters':['chapter1.1','chapter1.2','chapter1.3'],'gameDescription':'First Test Game'},
    #                                                                    {'gameCode':'game2','version':'0.1','chapters':['chapter2.1','chapter2.2','chapter2.3'],'gameDescription':'Second Test Game'}])
    #resultChapters = MongoDBConnection.get_chapters_collection().insert_many([{'chapterCode':'chapter1.1','gameCode':'game1','version':'0.1','chapterDescription':'First Test Chapter','startScene':'0','highlights':['highlight1','highlight2'],'snapshot':'URL fake 1'},
    #                                                                          {'chapterCode':'chapter1.2','gameCode':'game1','version':'0.1','chapterDescription':'Second Test Chapter','startScene':'10','highlights':['highlight3','highlight4'],'snapshot':'URL fake 2'},
    #                                                                          {'chapterCode':'chapter1.3','gameCode':'game1','version':'0.1','chapterDescription':'Third Test Chapter','startScene':'20','highlights':['highlight5','highlight6'],'snapshot':'URL fake 3'},
    #                                                                          {'chapterCode':'chapter2.1','gameCode':'game2','version':'0.1','chapterDescription':'Fourth Test Chapter','startScene':'30','highlights':['highlight7','highlight8'],'snapshot':'URL fake 4'},
    #                                                                          {'chapterCode':'chapter2.2','gameCode':'game2','version':'0.1','chapterDescription':'Fifth Test Chapter','startScene':'40','highlights':['highlight9','highlight10'],'snapshot':'URL fake 5'},
    #                                                                          {'chapterCode':'chapter2.3','gameCode':'game2','version':'0.1','chapterDescription':'Sixth Test Chapter','startScene':'50','highlights':['highlight11','highlight12'],'snapshot':'URL fake 6'}])
    #resultEvents = MongoDBConnection.get_events_collection().insert_many([{'eventCode':'event1','chapterCode':'chapter1.1','gameCode':'game1','version':'0.1','parentDecision':'','type':'multi-choice','description':'First Test Event','highlights':['h1','h2'],'possibleChoices':['c1','c2','c3']},
    #                                                                      {'eventCode':'event2','chapterCode':'chapter1.1','gameCode':'game1','version':'0.1','parentDecision':'event1','type':'timed','description':'Second Test Event','highlights':['h3','h4'],'possibleChoices':['2','90']},
    #                                                                      {'eventCode':'event3','chapterCode':'chapter1.2','gameCode':'game1','version':'0.1','parentDecision':'','type':'timed','description':'Third Test Event','highlights':['h5','h6'],'possibleChoices':['2','100']},
    #                                                                      {'eventCode':'event4','chapterCode':'chapter1.2','gameCode':'game1','version':'0.1','parentDecision':'event3','type':'multi-choice','description':'Fourth Test Event','highlights':['h7','h8'],'possibleChoices':['c1','c2','c3']},
    #                                                                      {'eventCode':'event5','chapterCode':'chapter1.3','gameCode':'game1','version':'0.1','parentDecision':'','type':'multi-choice','description':'Fifth Test Event','highlights':['h9','h10'],'possibleChoices':['c1','c2','c3','c4']},
    #                                                                      {'eventCode':'event6','chapterCode':'chapter1.3','gameCode':'game1','version':'0.1','parentDecision':'event5','type':'multi-choice','description':'Sixth Test Event','highlights':['h11','h12'],'possibleChoices':['c1','c2','c3']},
    #                                                                      {'eventCode':'event7','chapterCode':'chapter2.1','gameCode':'game2','version':'0.1','parentDecision':'','type':'multi-choice','description':'Seventh Test Event','highlights':['h13','h14'],'possibleChoices':['c1','c2','c3']},
    #                                                                      {'eventCode':'event8','chapterCode':'chapter2.1','gameCode':'game2','version':'0.1','parentDecision':'event7','type':'timed','description':'Eighth Test Event','highlights':['h15','h16'],'possibleChoices':['2','90']},
    #                                                                      {'eventCode':'event9','chapterCode':'chapter2.2','gameCode':'game2','version':'0.1','parentDecision':'','type':'timed','description':'Ninth Test Event','highlights':['h17','h18'],'possibleChoices':['2','100']},
    #                                                                      {'eventCode':'event10','chapterCode':'chapter2.2','gameCode':'game2','version':'0.1','parentDecision':'event9','type':'timed','description':'Tenth Test Event','highlights':['h19','h20'],'possibleChoices':['1','10']},
    #                                                                      {'eventCode':'event11','chapterCode':'chapter2.3','gameCode':'game2','version':'0.1','parentDecision':'','type':'multi-choice','description':'Eleventh Test Event','highlights':['h21','h22'],'possibleChoices':['c1','c2','c3','c4']},
    #                                                                     {'eventCode':'event12','chapterCode':'chapter2.3','gameCode':'game2','version':'0.1','parentDecision':'event11','type':'multi-choice','description':'Twelveth Test Event','highlights':['h23','h24'],'possibleChoices':['c1','c2','c3']}])
    #resultDecisions = MongoDBConnection.get_decisions_collection().insert_many([{'studentCode':'student1','eventCode':'event1','chapterCode':'chapter1.1','gameCode':'game1','version':'0.1','decision':'c1'},
    #                                                                            {'studentCode':'student1','eventCode':'event2','chapterCode':'chapter1.1','gameCode':'game1','version':'0.1','decision':'2'},
    #                                                                            {'studentCode':'student1','eventCode':'event3','chapterCode':'chapter1.2','gameCode':'game1','version':'0.1','decision':'100'},
    #                                                                            {'studentCode':'student1','eventCode':'event4','chapterCode':'chapter1.2','gameCode':'game1','version':'0.1','decision':'c2'},
    #                                                                            {'studentCode':'student1','eventCode':'event5','chapterCode':'chapter1.3','gameCode':'game1','version':'0.1','decision':'c3'},
    #                                                                            {'studentCode':'student1','eventCode':'event6','chapterCode':'chapter1.3','gameCode':'game1','version':'0.1','decision':'c3'},
    #                                                                            {'studentCode':'student2','eventCode':'event1','chapterCode':'chapter1.1','gameCode':'game1','version':'0.1','decision':'c2'},
    #                                                                            {'studentCode':'student2','eventCode':'event2','chapterCode':'chapter1.1','gameCode':'game1','version':'0.1','decision':'90'},
    #                                                                            {'studentCode':'student2','eventCode':'event3','chapterCode':'chapter1.2','gameCode':'game1','version':'0.1','decision':'2'},
    #                                                                            {'studentCode':'student2','eventCode':'event4','chapterCode':'chapter1.2','gameCode':'game1','version':'0.1','decision':'c3'},
    #                                                                            {'studentCode':'student2','eventCode':'event5','chapterCode':'chapter1.3','gameCode':'game1','version':'0.1','decision':'c1'},
    #                                                                            {'studentCode':'student2','eventCode':'event6','chapterCode':'chapter1.3','gameCode':'game1','version':'0.1','decision':'c1'},
    #                                                                            {'studentCode':'student1','eventCode':'event7','chapterCode':'chapter2.1','gameCode':'game2','version':'0.1','decision':'c1'},
    #                                                                            {'studentCode':'student1','eventCode':'event8','chapterCode':'chapter2.1','gameCode':'game2','version':'0.1','decision':'2'},
    #                                                                            {'studentCode':'student1','eventCode':'event9','chapterCode':'chapter2.2','gameCode':'game2','version':'0.1','decision':'2'},
    #                                                                            {'studentCode':'student1','eventCode':'event10','chapterCode':'chapter2.2','gameCode':'game2','version':'0.1','decision':'1'},
    #                                                                            {'studentCode':'student1','eventCode':'event11','chapterCode':'chapter2.3','gameCode':'game2','version':'0.1','decision':'c4'},
    #                                                                            {'studentCode':'student1','eventCode':'event12','chapterCode':'chapter2.3','gameCode':'game2','version':'0.1','decision':'c3'},
    #                                                                            {'studentCode':'student2','eventCode':'event7','chapterCode':'chapter2.1','gameCode':'game2','version':'0.1','decision':'c1'},
    #                                                                            {'studentCode':'student2','eventCode':'event8','chapterCode':'chapter2.1','gameCode':'game2','version':'0.1','decision':'90'},
    #                                                                            {'studentCode':'student2','eventCode':'event9','chapterCode':'chapter2.2','gameCode':'game2','version':'0.1','decision':'100'},
    #                                                                            {'studentCode':'student2','eventCode':'event10','chapterCode':'chapter2.2','gameCode':'game2','version':'0.1','decision':'3'},
    #                                                                            {'studentCode':'student2','eventCode':'event11','chapterCode':'chapter2.3','gameCode':'game2','version':'0.1','decision':'c1'},
    #                                                                            {'studentCode':'student2','eventCode':'event12','chapterCode':'chapter2.3','gameCode':'game2','version':'0.1','decision':'c2'}])
    #resultCredentials =  MongoDBConnection.get_credentials_collection().insert_many([{'_id':'user1','filters':['group_country','group_city','event_type','student_sex','student_age'],'groups':['group1','group2'],'password':'pass1','role':'admin'},
    #                                                                                 {'_id':'user2','filters':['group_country','group_city','event_type'],'groups':['group1'],'password':'pass2','role':'teacher'}])
    #resultFilters = MongoDBConnection.get_filters_collection().insert_many([{'_id':'group_country','table':'groups','field':'country','type':'textual'},
    #                                                                        {'_id':'group_city','table':'groups','field':'city','type':'textual'},
    #                                                                        {'_id':'event_type','table':'events','field':'type','type':'textual'},
    #                                                                        {'_id':'student_sex','table':'students','field':'sex','type':'textual'},
    #                                                                        {'_id':'student_age','table':'students','field':'age','type':'numeric'}])

    app = connexion.App(__name__, specification_dir='./swagger/')
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api('swagger.yaml', arguments={'title': 'YoungRes data comsuption API'}, pythonic_params=True)
    app.run(port=8080)


if __name__ == '__main__':
    main()
