package testApp.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import testApp.model.Status;

import java.util.List;

@Repository
public class StatusDAOImpl implements StatusDAO {
    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<Status> allStatuses() {
        Session session = sessionFactory.getCurrentSession();
        return session.createQuery("from Status ").list();
    }

    @Override
    public Status getById(int id) {
        Session session = sessionFactory.getCurrentSession();
        return session.get(Status.class, id);
    }
}