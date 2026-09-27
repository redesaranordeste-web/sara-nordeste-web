import { team } from "@/data/team";
import identityArt from "@/assets/equipe/identidade-sara.jpeg";
import { HeartHandshake, HandHeart, Sprout, Users } from "lucide-react";

const purpose = [
  { label: "Acolher", icon: HeartHandshake },
  { label: "Cuidar", icon: HandHeart },
  { label: "Recuperar", icon: Sprout },
  { label: "Reinserir", icon: Users },
];

export function TeamSection() {
  return (
    <section id="equipe" aria-labelledby="team-title" className="team-section">
      <div className="container-page">
        <div className="team-intro">
          <div>
            <span className="team-eyebrow">Pessoas que fazem a diferença</span>
            <h2 id="team-title">
              Por trás de cada <em>recomeço,</em> existe uma equipe.
            </h2>
            <p className="team-lead">Conheça quem trabalha diariamente para transformar vidas.</p>
            <div className="team-purpose">
              <h3>Nosso propósito</h3>
              <p>
                Mais do que um trabalho, é um compromisso com a vida. Nossa equipe se dedica a
                acolher, orientar e acompanhar cada pessoa que chega até nós.
              </p>
            </div>
          </div>
          <figure className="team-identity">
            <img
              src={identityArt}
              alt="Sara Nordeste. Uma Comunidade do Reino, Aqui Morre O Homem e Nasce o Herói."
              width="1080"
              height="1080"
              loading="lazy"
            />
            <figcaption>Fé, acolhimento e compromisso com a vida.</figcaption>
          </figure>
        </div>
        <div className="team-grid-heading">
          <span className="team-eyebrow">Nossa equipe</span>
          <p>Diferentes talentos. O mesmo cuidado.</p>
        </div>
        <ul className="team-grid">
          {team.map((person) => (
            <li key={person.id}>
              <article className="team-card">
                <div className="team-photo">
                  <img
                    src={person.photo}
                    alt={person.name}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: person.position }}
                  />
                </div>
                <div className="team-card-content">
                  <p className="team-role">{person.role}</p>
                  <p className="team-description">{person.description}</p>
                  <h3>{person.name}</h3>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <div className="team-closing">
          <span className="team-eyebrow">Sara Nordeste</span>
          <h3>
            Uma equipe. <em>Um propósito.</em>
          </h3>
          <p>Juntos, trabalhamos para acolher, cuidar, recuperar e reinserir.</p>
          <ul className="team-values">
            {purpose.map(({ label, icon: Icon }) => (
              <li key={label}>
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <blockquote>Porque por trás de cada história, existe uma equipe que acredita.</blockquote>
        </div>
      </div>
    </section>
  );
}
