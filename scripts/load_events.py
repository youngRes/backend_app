#!python3

import argparse
import pymongo
import json


def funtionality(host: str, port: int):

    driver = pymongo.MongoClient(host, port)

    with open("events.json") as f:
        events_data = json.load(f)

    driver.games_db.events.insert_many(events_data["events"])


def main():
    # how to use: read_db -o test.csv -d mixto_03 -s standard

    parser = argparse.ArgumentParser(description="fills a Youngres dummy database into a mongodb instance")

    parser.add_argument('-i', type=str, nargs=1, help="ip of the host with the mongo database")
    parser.add_argument('-p', type=str, nargs=1, help="port")


    args = parser.parse_args()
    funtionality(args.i[0], int(args.p[0]))


if __name__ == "__main__":
    main()
