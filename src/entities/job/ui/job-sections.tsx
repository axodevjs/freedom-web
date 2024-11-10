export function JobSections({ job }: { job: any }) {
  return (
    <>
      {job.hard_skills.length > 0 && (
        <Section title="Технические навыки" items={job.hard_skills} />
      )}
      {job.soft_skills.length > 0 && (
        <Section title="Личные качества" items={job.soft_skills} />
      )}
      {job.task && (
        <Section title="Обязанности">
          <p className="text-gray-700">{job.task}</p>
        </Section>
      )}
      {job.requirements.length > 0 && (
        <Section title="Требования" items={job.requirements} />
      )}
      {job.additional.length > 0 && (
        <Section title="Мы предлагаем" items={job.additional} />
      )}
      {job.contacts.length > 0 && (
        <Section title="Контакты">
          <ul className="list-disc pl-5 space-y-2">
            {job.contacts.map((contact: string, index: number) => (
              <li key={index} className="text-gray-700">
                {contact}
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
}

function Section({
  title,
  items,
  children,
}: {
  title: string;
  items?: string[];
  children?: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 mt-4">{title}</h2>
      {items ? (
        <ul className="list-disc pl-5 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        children
      )}
    </section>
  );
}
