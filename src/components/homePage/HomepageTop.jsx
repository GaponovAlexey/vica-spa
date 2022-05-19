import { css } from '@emotion/css'
import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '../utils/Button'

export const HomepageTop = () => {
  const { LanguageENG } = useSelector((state) => state.data)

  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        grid-column-gap: 10px;
        padding: 108px 0px 15px 0px;
        align-items: top;
        @media (max-width: 768px) {
          max-width: 710px;
        }
        @media (max-width: 420px) {
          max-width: 350px;
          padding-top: 80px;
        }
      `}
    >
      <div
        className={css`
          dispaly: flex;
          flex-wrap: wrap;
          width: 118px;
          height: 100px;
          font-family: GilroyBold;
          @media (max-width: 768px) {
            max-width: 740px;
            font-size: 40px;
          }
          @media (max-width: 420px) {
            max-width: 350px;
            font-size: 12px;
            width: 70px;
          }
        `}
      >
        <div
          className={css`
            @media (max-width: 768px) {
              font-size: 40px;
            }
            @media (max-width: 420px) {
              font-size: 12px;
            }
          `}
        >
          {LanguageENG ? (
            <h1
              className={css`
                font-size: 34px;
                @media (max-width: 768px) {
                  font-size: 20px;
                }
                @media (max-width: 420px) {
                  line-height: 24px;
                  font-size: 20px;
                }
              `}
            >
              Podolog <br /> Viktoria <br /> Olegovna
            </h1>
          ) : (
            <h1
              className={css`
                font-size: 34px;
                @media (max-width: 768px) {
                  font-size: 24px;
                }
                @media (max-width: 420px) {
                  font-size: 16px;
                }
              `}
            >
              Подолог
              <br /> Виктория
              <br /> Ясная
            </h1>
          )}
        </div>
      </div>
      <div
        className={css`
          margin: 0 auto;
          margin-top: 10px;
          @media (max-width: 768px) {
            font-size: 16px;
            margin-top: 5px;
          }
          @media (max-width: 420px) {
            font-size: 12px;
            margin-top: 0;
          }
        `}
      >
        {LanguageENG ? (
          <div>
            Pedicure Professional <br /> in the profession since 2014,
            <br /> Komendantsky Prospekt (Saint Petersburg)
          </div>
        ) : (
          <div>
            Со мной не страшно <br /> В профессии с 2014 года
            <br /> Комендантский проспект <br /> (Санкт Петербург)
          </div>
        )}
      </div>
      <div>
        <Button />
      </div>
    </div>
  )
}
