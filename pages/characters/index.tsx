import { CharacterCard } from "@/components/cards/CharacterCard";
import { MainLayout } from "@/components/MainLayout";
import { charactersArray } from "@/data/characters";
import { NextPage } from "next";
import Head from "next/head";

const CharactersIndex: NextPage = () => {
  return (
    <>
      <Head>
        <title>Characters</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <h1 className="font-semibold text-4xl mb-4 mt-6">Characters</h1>

        <div className="flex flex-row flex-wrap gap-2 justify-evenly md:justify-start">
          {charactersArray.map((character) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              rarity={character.rarity}
            />
          ))}
        </div>
      </MainLayout>
    </>
  );
};

export default CharactersIndex;