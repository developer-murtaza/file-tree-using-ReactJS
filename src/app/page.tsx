'use client';

import Image from 'next/image'
import styles from './page.module.css'
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

// const fileTree = {
//   "name": "category1",
//   "subCategories": [
//     {
//       "name": "subCat1",
//       "subCategories": [
//         {
//           "name": "subCat1_1",
//           "subCategories": [],
//           "tags": [
//             "tag1",
//             "tag2",
//             "tag3"
//           ]
//         }
//       ],
//       "tags": [
//         "tag1",
//         "tag2",
//         "tag3"
//       ]
//     },
//     {
//       "name": "subCat2",
//       "subCategories": [
//         {
//           "name": "subCat1_1",
//           "subCategories": [
//             {
//               "name": "subCat1_1",
//               "subCategories": [],
//               "tags": [
//                 "tag1",
//                 "tag2",
//                 "tag3"
//               ]
//             }
//           ],
//           "tags": [
//             "tag1",
//             "tag2",
//             "tag3"
//           ]
//         }
//       ],
//       "tags": [
//         "tag1",
//         "tag2",
//         "tag3"
//       ]
//     },
//     {
//       "name": "subCat3",
//       "subCategories": [],
//       "tags": [
//         "tag1",
//         "tag2",
//         "tag3"
//       ]
//     }
//   ],
//   "tags": null
// };

const fileTree = [
  {
    folderName: "css",
    subFileTree: [
      {
        folderName: 'css_1'
      },
      {
        folderName: 'css_4'
      },
      {
        folderName: 'css_45'
      },
      {
        folderName: 'css_100'
      }
    ]
  },
  {
    folderName: "js",
    subFileTree: [
      {
        folderName: 'js_1'
      },
      {
        folderName: 'js_2'
      }
    ]
  },
  {
    folderName: "images",
  },
  {
    folderName: "videos",
    subFileTree: [
      {
        folderName: 'videos_1'
      },
      {
        folderName: 'videos_2'
      }
    ]
  },
];

function CreateFileTree() {
  return (
    <>
      <Accordion selectionMode="multiple" className={styles.listStyle}>
        {
          fileTree.map((items, index) => {
            return <AccordionItem key={index} className={items.subFileTree != undefined ? styles.hasChildren : undefined}  title={items.folderName}>
              {
                items.subFileTree != undefined
                  ? 
                  <>
                    <ul>
                    {
                      items.subFileTree?.map((items, index) => {
                        return(
                          <li key={index}>{items.folderName}</li>
                        )
                      })
                    }
                  </ul>
                  </>
                :
                '' 
              }
              
            </AccordionItem>
          })
        }
      </Accordion>
      {/* <ul className={styles.listStyle}>
        {
          fileTree.map((items, index) => {
            return <li key={index} className={items.subFileTree != undefined ? styles.hasChildren : undefined}>
              <p>{items.folderName} {items.subFileTree != undefined ? <span></span> : ''}</p>
              {
                items.subFileTree != undefined
                  ? 
                  <>
                    <ul>
                    {
                      items.subFileTree?.map((items, index) => {
                        return(
                          <li key={index}>{items.folderName}</li>
                        )
                      })
                    }
                  </ul>
                  </>
                :
                '' 
              }
              
            </li>
          })
        }
      </ul> */}
    </>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <aside className={styles.aside}>
        <CreateFileTree></CreateFileTree>
      </aside>

      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  )
}
